import 'reflect-metadata';
import dotenv from 'dotenv-safe';
import express from 'express';
import connectDB from './middleware/connectDB';
import createGraphQL from './middleware/createGraphQL';
import session from './middleware/session';
import vkAuth from './middleware/vkAuth';

dotenv.config();

const main = async () => {
  const app = express();
  app.set('trust proxy', 1);

  await connectDB();
  session(app);
  vkAuth(app);
  await createGraphQL(app);

  app.listen({ port: 4000 }, () =>
    console.log(`🚀 Server ready at http://localhost:4000/graphql`)
  );
};

main();
