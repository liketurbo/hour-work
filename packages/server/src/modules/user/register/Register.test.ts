import faker from 'faker';
import { Connection } from 'typeorm';
import User from '../../../entities/User';
import connectTestDB from '../../../test/utils/connectTestDB';
import graphQLCall from '../../../test/utils/graphQLCall';

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
    const user = {
      firstName: faker.name.firstName(),
      email: faker.internet.email(),
      password: faker.internet.password()
    };

    const response = await graphQLCall({
      query: registerMutation,
      queryVariables: {
        input: user
      }
    });

    expect(response).toMatchObject({
      data: {
        register: {
          id: expect.any(String),
          email: user.email,
          firstName: user.firstName
        }
      }
    });

    const dbUser = await User.findOne(response.data.register.id);
    expect(dbUser).toMatchObject({
      id: expect.any(Number),
      firstName: user.firstName,
      email: user.email,
      password: expect.any(String),
      confirmed: false
    });
  });
});
