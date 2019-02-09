import { PureComponent } from 'react';
import Context from '../interfaces/Context';
import {
  ConfirmMutation,
  ConfirmVariables,
  ConfirmDocument
} from '../components/ApolloComponents';
import redirect from '../lib/redirect';

class Confirm extends PureComponent {
  static async getInitialProps({
    apolloClient,
    query: { token },
    ...ctx
  }: Context) {
    if (!token) {
      return redirect(ctx, '/');
    }

    await apolloClient.mutate<ConfirmMutation, ConfirmVariables>({
      mutation: ConfirmDocument,
      variables: {
        token
      }
    });

    return redirect(ctx, '/sign-in');
  }

  render() {
    return null;
  }
}

export default Confirm;
