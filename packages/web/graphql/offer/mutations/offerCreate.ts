import gql from 'graphql-tag';

const offerCreateMutation = gql`
  mutation OfferCreate($jobId: Float!) {
    offerCreate(jobId: $jobId) {
      id
    }
  }
`;

export default offerCreateMutation;
