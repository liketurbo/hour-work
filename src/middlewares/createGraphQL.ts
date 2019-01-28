import { ApolloServer } from 'apollo-server-express';
import { Express } from 'express';
import { formatArgumentValidationError } from 'type-graphql';
import createSchema from '../graphql/createSchema';

const createGraphQL = async (app: Express) => {
  const schema = await createSchema();

  const server = new ApolloServer({
    schema,
    formatError: formatArgumentValidationError,
    context: ({ req }: any) => ({ req })
  });

  server.applyMiddleware({ app });

  return server;
};

export default createGraphQL;
