import { ConnectionOptions, createConnection } from 'typeorm'

const options: ConnectionOptions = {
  type: 'sqlite',
  database: './mydb.sql',
  entities: ["build/**/*.entity{.ts,.js}"],
  migrations: ["build/**/*.migration{.ts,.js}"],
}

createConnection(options)