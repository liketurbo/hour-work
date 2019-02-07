import { buildSchema } from 'type-graphql';
import UserChangePasswordResolver from '../module/user/ChangePassword';
import UserConfirmResolver from '../module/user/Confirm';
import UserForgotPasswordResolver from '../module/user/ForgotPassword';
import UserLoginResolver from '../module/user/Login';
import UserLogoutResolver from '../module/user/Logout';
import UserMeResolver from '../module/user/Me';
import UserRegisterResolver from '../module/user/Register';
import JobCreateResolver from '../module/job/JobCreate';
import JobFetchAllResolver from '../module/job/JobFetchAll';
import Context from '../types/context';
import OfferGetAllReceivedResolver from '../module/offer/OfferGetAllReceived';
import OfferCreateResolver from '../module/offer/OfferCreate';
import OfferGetAllOfferedResolver from '../module/offer/OfferGetAllOffered';

const createSchema = async () =>
  buildSchema({
    resolvers: [
      UserChangePasswordResolver,
      UserConfirmResolver,
      UserForgotPasswordResolver,
      UserLoginResolver,
      UserLogoutResolver,
      UserRegisterResolver,
      UserMeResolver,
      JobCreateResolver,
      JobFetchAllResolver,
      OfferGetAllReceivedResolver,
      OfferGetAllOfferedResolver,
      OfferCreateResolver
    ],
    authChecker({ context: { req } }: { context: Context }) {
      return req.session && req.session.userId ? true : false;
    }
  });

export default createSchema;
