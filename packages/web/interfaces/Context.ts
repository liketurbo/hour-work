import { NextContext } from 'next';
import { ApolloClient, NormalizedCacheObject } from 'apollo-boost';

interface Context extends NextContext {
  apolloClient: ApolloClient<NormalizedCacheObject>;
  query: {
    token?: string;
  };
}

export default Context;
