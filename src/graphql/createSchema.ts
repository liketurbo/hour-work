import { buildSchema } from 'type-graphql';
import JobResolver from '../modules/job/resolver';
import UserLoginResolver from '../modules/user/Login';
import UserRegisterResolver from '../modules/user/Register';

const createSchema = async () =>
  buildSchema({
    resolvers: [JobResolver, UserRegisterResolver, UserLoginResolver]
  });

export default createSchema;
