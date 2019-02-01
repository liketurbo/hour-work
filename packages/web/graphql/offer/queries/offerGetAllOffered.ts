import gql from 'graphql-tag';

const offerGetAllOffered = gql`
  query OfferGetAllOffered {
    offerGetAllOffered {
      id
      job {
        title
        owner {
          firstName
        }
      }
    }
  }
`;

export default offerGetAllOffered;
