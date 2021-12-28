import { Router } from 'express'
import { CreateUsersController } from './controllers/CreateUsersController'

const routes = Router()

routes.post('/users', new CreateUsersController().handle)

export { routes }