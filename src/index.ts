import express from 'express';
import 'reflect-metadata';
import connectDB from './middlewares/connectDB';
import connectGraphQL from './middlewares/connectGraphQL';

const main = async () => {
  const app = express();
  await connectDB();
  await connectGraphQL(app);

  app.listen({ port: 4000 }, () =>
    console.log(`🚀 Server ready at http://localhost:4000/graphql`)
  );
};

main();
