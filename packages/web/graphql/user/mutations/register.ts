import gql from 'graphql-tag';

const userRegisterMutation = gql`
  mutation UserRegister($input: UserRegisterInput!) {
    register(input: $input) {
      id
      firstName
      email
    }
  }
`;

export default userRegisterMutation;
