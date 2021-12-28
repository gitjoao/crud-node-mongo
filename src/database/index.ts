import { connect } from 'mongoose'

async function init(): Promise<void> {
  await connect('mongodb+srv://root:root@dbcrud.ybtki.mongodb.net/teste?retryWrites=true&w=majority');
}

init()