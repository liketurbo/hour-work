import 'reflect-metadata';
import { buildSchema } from 'type-graphql';
import JobResolver from '../modules/job/resolver';

const createSchema = async () =>
  buildSchema({
    resolvers: [JobResolver]
  });

export default createSchema;
