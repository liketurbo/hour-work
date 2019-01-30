import gql from 'graphql-tag';

const userLogoutMutation = gql`
  mutation UserLogout {
    logout
  }
`;

export default userLogoutMutation;
