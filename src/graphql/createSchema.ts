import { buildSchema } from 'type-graphql';
import UserLoginResolver from '../modules/user/Login';
import UserMeResolver from '../modules/user/Me';
import UserRegisterResolver from '../modules/user/Register';

const createSchema = async () =>
  buildSchema({
    resolvers: [UserRegisterResolver, UserLoginResolver, UserMeResolver]
  });

export default createSchema;
