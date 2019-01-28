import { createConnection } from 'typeorm';

const connectToDB = async () => createConnection();

export default connectToDB;
