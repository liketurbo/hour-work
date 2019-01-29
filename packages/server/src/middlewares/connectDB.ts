import { createConnection } from 'typeorm';

const connectDB = async () =>
  createConnection({
    name: 'default',
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'root',
    database: 'husband-hour',
    synchronize: true,
    logging: true,
    entities: [__dirname + '/../entities/*.ts']
  });

export default connectDB;
