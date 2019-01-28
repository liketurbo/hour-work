import express from 'express';
import 'reflect-metadata';
import connectDB from './middlewares/connectDB';
import createGraphQL from './middlewares/createGraphQL';
import session from './middlewares/session';

const main = async () => {
  const app = express();
  await connectDB();
  session(app);
  await createGraphQL(app);

  app.listen({ port: 4000 }, () =>
    console.log(`🚀 Server ready at http://localhost:4000/graphql`)
  );
};

main();
