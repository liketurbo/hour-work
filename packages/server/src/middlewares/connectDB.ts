import { createConnection, getConnectionOptions } from 'typeorm';

const connectDB = async () => {
  const connectionOptions = await getConnectionOptions(process.env.NODE_ENV);
  return createConnection(connectionOptions);
};

export default connectDB;
