import gql from 'graphql-tag';

const confirmMutation = gql`
  mutation Confirm($token: String!) {
    confirm(token: $token)
  }
`;

export default confirmMutation;
