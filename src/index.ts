import { ApolloServer } from 'apollo-server-express';
import express from 'express';
import { formatArgumentValidationError } from 'type-graphql';
import createSchema from './graphql/createSchema';
import connectToDB from './middlewares/connectToDB';

const startServer = async () => {
  const app = express();
  await connectToDB();

  const server = new ApolloServer({
    schema: await createSchema(),
    formatError: formatArgumentValidationError
  });

  server.applyMiddleware({ app });

  app.listen({ port: 4000 }, () =>
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
  );
};

startServer();
