import gql from 'graphql-tag';

const offerGetAllReceived = gql`
  query OfferGetAllReceived {
    offerGetAllReceived {
      id
      job {
        title
      }
      owner {
        firstName
      }
    }
  }
`;

export default offerGetAllReceived;
