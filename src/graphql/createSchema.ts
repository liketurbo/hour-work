import { buildSchema } from 'type-graphql';
import JobResolver from '../modules/job/resolver';
import UserRegisterResolver from '../modules/user/Register';

const createSchema = async () =>
  buildSchema({
    resolvers: [JobResolver, UserRegisterResolver]
  });

export default createSchema;
