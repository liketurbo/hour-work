import faker from 'faker';
import { Connection } from 'typeorm';
import User from '../../../entities/User';
import connectTestDB from '../../../tests/utils/connectTestDB';
import graphQLCall from '../../../tests/utils/graphQLCall';

let connection: Connection;
beforeAll(async () => {
  connection = await connectTestDB(false);
});
afterAll(async () => {
  await connection.close();
});

const meQuery = `
  query {
  me {
    id
    firstName
    email
  }
}
`;

describe('Me', () => {
  it('get user', async () => {
    const user = await User.create({
      firstName: faker.name.firstName(),
      email: faker.internet.email(),
      password: faker.internet.password()
    }).save();

    const context = { req: { session: { userId: user.id } } };

    const response = await graphQLCall({
      query: meQuery,
      context
    });

    expect(response).toMatchObject({
      data: {
        me: {
          id: `${user.id}`,
          firstName: user.firstName,
          email: user.email
        }
      }
    });
  });

  it('returns null', async () => {
    const context = { req: { session: {} } };

    const response = await graphQLCall({
      query: meQuery,
      context
    });

    expect(response).toMatchObject({
      data: {
        me: null
      }
    });
  });
});
