import gql from 'graphql-tag';

const userLoginMutation = gql`
  mutation UserLogin($input: UserLoginInput!) {
    login(input: $input) {
      id
      firstName
      email
    }
  }
`;

export default userLoginMutation;
