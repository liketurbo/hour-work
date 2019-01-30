import gql from 'graphql-tag';

const jobFetchAllMutation = gql`
  query JobFetchAll {
    jobFetchAll {
      id
      title
      description
      location
      owner {
        id
        firstName
        email
      }
    }
  }
`;

export default jobFetchAllMutation;
