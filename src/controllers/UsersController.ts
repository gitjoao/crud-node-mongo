import { Request, Response } from 'express'
import { UserRepository } from '../repository/userRepository'

export class UsersController {
  async handle (request: Request, response: Response) {
    const { name, email } = request.body

    const repository = new UserRepository

    const result = await repository.create({ name, email })

    if (result instanceof Error) {
      return response.status(400).json({error: result.message})
    }

    return response.json(result)
  }
}