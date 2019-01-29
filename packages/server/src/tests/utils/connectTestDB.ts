import { createConnection } from 'typeorm';

const connectTestDB = async (drop: boolean) =>
  createConnection({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'root',
    database: 'husband-hour-test',
    synchronize: drop,
    dropSchema: drop,
    entities: [__dirname + '/../../entities/*.ts']
  });

export default connectTestDB;
