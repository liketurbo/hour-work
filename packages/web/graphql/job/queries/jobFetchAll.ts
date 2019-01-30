import gql from 'graphql-tag';

const jobFetchAllQuery = gql`
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

export default jobFetchAllQuery;
