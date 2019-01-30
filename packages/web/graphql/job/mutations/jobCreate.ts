import gql from 'graphql-tag';

const jobCreateMutation = gql`
  mutation JobCreate($input: JobCreateInput!) {
    jobCreate(input: $input) {
      id
      title
      description
      location
    }
  }
`;

export default jobCreateMutation;
