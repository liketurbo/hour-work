import { buildSchema } from 'type-graphql';
import UserConfirmResolver from '../modules/user/Confirm';
import UserLoginResolver from '../modules/user/Login';
import UserMeResolver from '../modules/user/Me';
import UserRegisterResolver from '../modules/user/Register';
import Context from '../types/context';

const createSchema = async () =>
  buildSchema({
    resolvers: [
      UserRegisterResolver,
      UserLoginResolver,
      UserMeResolver,
      UserConfirmResolver
    ],
    authChecker({ context: { req } }: { context: Context }) {
      if (req.session.userId) {
        return true;
      }

      return false;
    }
  });

export default createSchema;
