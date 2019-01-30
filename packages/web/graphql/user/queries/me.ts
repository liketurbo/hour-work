import gql from 'graphql-tag';

const userMeQuery = gql`
  query UserMe {
    me {
      id
      firstName
      email
    }
  }
`;

export default userMeQuery;
