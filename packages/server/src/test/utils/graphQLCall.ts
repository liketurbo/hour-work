import { graphql, GraphQLSchema } from 'graphql';
import createSchema from '../../graphql/createSchema';

interface graphQLCallArgs {
  query: string;
  queryVariables?: {
    [key: string]: any;
  };
  context?: {
    [key: string]: any;
  };
}

let schema: GraphQLSchema;
const graphQLCall = async ({
  query,
  queryVariables,
  context
}: graphQLCallArgs) => {
  if (!schema) {
    schema = await createSchema();
  }

  return graphql({
    schema,
    source: query,
    variableValues: queryVariables,
    contextValue: context
  });
};

export default graphQLCall;
