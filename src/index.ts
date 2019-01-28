import { ApolloServer } from 'apollo-server-express';
import * as express from 'express';
import createSchema from './graphql/createSchema';
import connectToDB from './middlewares/connectToDB';

const startServer = async () => {
  const app = express();
  await connectToDB();

  const server = new ApolloServer({ schema: await createSchema() });

  server.applyMiddleware({ app });

  app.listen({ port: 4000 }, () =>
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
  );
};

startServer();
