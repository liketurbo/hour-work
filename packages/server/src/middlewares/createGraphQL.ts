import { ApolloServer } from 'apollo-server-express';
import { Express } from 'express';
import { formatArgumentValidationError } from 'type-graphql';
import createSchema from '../graphql/createSchema';

const createGraphQL = async (app: Express) => {
  const schema = await createSchema();

  const server = new ApolloServer({
    schema,
    formatError: formatArgumentValidationError,
    context: ({ req, res }: any) => ({ req, res })
  });

  server.applyMiddleware({ app });

  return server;
};

export default createGraphQL;
