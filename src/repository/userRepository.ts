import { User, UserModel } from "../models/Users";

export class UserRepository {

  async create ({name, email}: UserRequest): Promise<User | Error> {
    
    if (await UserModel.findOne({ email })) {
      return new Error('User Already exist')
    }

    const user = new UserModel({
      name: name,
      email: email
    });
    await user.save();

    return user
  }
}

type UserRequest = {
  name: string
  email: string
}