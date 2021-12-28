import express from 'express'
import './database'
import { routes } from './routes';
const app = express();

app.use(express.json())

app.use(routes)

app.listen(parseInt(process.env.PORT, 10) || 8080, () => console.log(`..::Server ready::..`))