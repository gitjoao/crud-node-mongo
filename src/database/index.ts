import { connect } from 'mongoose'

async function init(): Promise<void> {
  await connect(process.env.MONGO_CONN, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
}

init()