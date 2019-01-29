import { graphql, GraphQLSchema } from 'graphql';
import createSchema from '../../graphql/createSchema';

interface graphQLCallArgs {
  source: string;
  variableValues?: {
    [key: string]: any;
  };
}

let schema: GraphQLSchema;
const graphQLCall = async ({ source, variableValues }: graphQLCallArgs) => {
  if (!schema) {
    schema = await createSchema();
  }

  return graphql({
    schema,
    source,
    variableValues
  });
};

export default graphQLCall;
