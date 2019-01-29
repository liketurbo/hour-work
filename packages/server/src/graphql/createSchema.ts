import { buildSchema } from 'type-graphql';
import UserChangePasswordResolver from '../modules/user/ChangePassword';
import UserConfirmResolver from '../modules/user/Confirm';
import UserForgotPasswordResolver from '../modules/user/ForgotPassword';
import UserLoginResolver from '../modules/user/Login';
import UserLogoutResolver from '../modules/user/Logout';
import UserMeResolver from '../modules/user/Me';
import UserRegisterResolver from '../modules/user/Register';
import Context from '../types/context';

const createSchema = async () =>
  buildSchema({
    resolvers: [
      UserChangePasswordResolver,
      UserConfirmResolver,
      UserForgotPasswordResolver,
      UserLoginResolver,
      UserLogoutResolver,
      UserRegisterResolver,
      UserMeResolver
    ],
    authChecker({ context: { req } }: { context: Context }) {
      if (req.session.userId) {
        return true;
      }

      return false;
    }
  });

export default createSchema;
