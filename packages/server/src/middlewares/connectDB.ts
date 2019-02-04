// import { createConnection, getConnectionOptions } from 'typeorm';
// import ms from 'ms';

// const connectDB = async () => {
//   const connectionOptions = await getConnectionOptions(process.env.NODE_ENV);

//   let retries = 5;
//   while (retries) {
//     try {
//       return createConnection({ ...connectionOptions, name: 'default' });
//     } catch (err) {
//       console.log(err);
//       retries -= 1;
//       console.log(`retries left: ${retries}`);
//       // wait 1, 2, 3, 4, 5 seconds
//       await new Promise(res => setTimeout(res, ms(`${5 - retries}s`)));
//     }
//   }

//   return null;
// };

// export default connectDB;
import { createConnection } from 'typeorm';
import Job from '../entities/Job';
import User from '../entities/User';
import Offer from '../entities/Offer';

const dev = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'hour-work',
  synchronize: true,
  logging: false,
  entities: ['src/entity/**/*.*'],
  migrations: ['src/migration/**/*.*'],
  subscribers: ['src/subscriber/**/*.*'],
  cli: {
    entitiesDir: 'src/entity',
    migrationsDir: 'src/migration',
    subscribersDir: 'src/subscriber'
  }
};

const prod = {
  type: 'postgres',
  host: 'db',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'hour-work',
  synchronize: true,
  logging: false,
  entities: [Job, User, Offer]
};

const connectDB = async () => {
  let retries = 5;
  while (retries) {
    try {
      return createConnection(
        process.env.NODE_ENV === 'production' ? (prod as any) : (dev as any)
      );
    } catch (err) {
      console.log(err);
      retries -= 1;
      console.log(`retries left: ${retries}`);
      // wait 5 seconds
      await new Promise(res => setTimeout(res, 5000));
    }
  }

  return null;
};

export default connectDB;
