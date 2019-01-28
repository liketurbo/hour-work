import { createConnection } from 'typeorm';

const connectDB = async () => createConnection();

export default connectDB;
