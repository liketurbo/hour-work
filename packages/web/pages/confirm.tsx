import { Component } from 'react';
import Context from '../interfaces/Context';
import {
  ConfirmMutation,
  ConfirmVariables,
  ConfirmDocument
} from '../components/ApolloComponents';
import redirect from '../lib/redirect';

class Confirm extends Component {
  static async getInitialProps({
    apolloClient,
    query: { token },
    ...ctx
  }: Context) {
    await apolloClient.mutate<ConfirmMutation, ConfirmVariables>({
      mutation: ConfirmDocument,
      variables: {
        token
      }
    });

    redirect(ctx, '/sign-in');

    return {};
  }

  render() {
    return null as any;
  }
}

export default Confirm;
