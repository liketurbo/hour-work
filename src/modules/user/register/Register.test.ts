import { Connection } from 'typeorm';
import connectTestDB from '../../../tests/utils/connectTestDB';
import graphQLCall from '../../../tests/utils/graphQLCall';

let connection: Connection;
beforeAll(async () => {
  connection = await connectTestDB(false);
});
afterAll(async () => {
  await connection.close();
});

const registerMutation = `
  mutation RegisterMutation($input: UserRegisterInput!) {
  register(
    input: $input
  ) {
    id
    firstName
    email
  }
}
`;

describe('Register', () => {
  it('create user', async () => {
    const result = await graphQLCall({
      source: registerMutation,
      variableValues: {
        input: {
          firstName: 'Oleg',
          email: 'oleg@mail.ru',
          password: 'SuperOleg'
        }
      }
    });

    console.log(result);
  });
});
