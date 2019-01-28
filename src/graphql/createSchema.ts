import 'reflect-metadata';
import { buildSchema } from 'type-graphql';
import JobResolver from '../modules/job/resolver';
import UserRegisterResolver from '../modules/user/register/resolver';

const createSchema = async () =>
  buildSchema({
    resolvers: [JobResolver, UserRegisterResolver]
  });

export default createSchema;
