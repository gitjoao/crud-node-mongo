import { Request, Response } from 'express'
import { CreateUsersService } from '../services/CreateUsersService'

export class CreateUsersController {
  async handle (request: Request, response: Response) {
    const { name, email } = request.body

    const service = new CreateUsersService

    const result = await service.exec({ name, email })

    if (result instanceof Error) {
      return response.status(400).json({error: result.message})
    }

    return response.json(result)
  }
}