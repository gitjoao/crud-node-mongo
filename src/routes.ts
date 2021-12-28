import { Router, Request, Response } from 'express'
import { CreateUsersController } from './controllers/CreateUsersController'

const routes = Router()

routes.get('/', (request: Request, response: Response) => {
  response.json({data: 'Server ready'})
})
routes.post('/users', new CreateUsersController().handle)

export { routes }