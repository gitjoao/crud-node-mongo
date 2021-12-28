import { Router, Request, Response } from 'express'
import { UsersController } from './controllers/UsersController'

const routes = Router()

routes.get('/', (request: Request, response: Response) => {
  response.json({data: 'Server ready'})
})
routes.post('/users', new UsersController().handle)

export { routes }