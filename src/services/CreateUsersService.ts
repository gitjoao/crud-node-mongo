import { getRepository } from 'typeorm'
import { Users } from '../entities/Users'

export class CreateUsersService {

  async exec ({name, email}: UserRequest): Promise<Users | Error> {
    const repository = getRepository(Users)

    if (await repository.findOne({email})) {
      return new Error('User already exits')
    }
    const user = repository.create({
      name: name,
      email: email,
      created_at: new Date()
    })

    await repository.save(user)

    return user
  }
}

type UserRequest = {
  name: string
  email: string
}