import { createConnection, getConnectionOptions } from 'typeorm';
import ms from 'ms';

const connectDB = async () => {
  const connectionOptions = await getConnectionOptions(process.env.NODE_ENV);

  let retries = 5;
  while (retries) {
    try {
      return createConnection(connectionOptions);
    } catch (err) {
      console.log(err);
      retries -= 1;
      console.log(`retries left: ${retries}`);
      // wait 1, 2, 3, 4, 5 seconds
      await new Promise(res => setTimeout(res, ms(`${5 - retries}s`)));
    }
  }

  return null;
};

export default connectDB;
