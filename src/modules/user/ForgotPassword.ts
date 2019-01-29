import { Arg, Mutation, Resolver } from 'type-graphql';
import UserForgotPasswordInput from './forgotPassword/ForgotPasswordInput';
import User from '../../entities/User';
import createEmailUrl from '../../utils/CreateEmailUrl';
import { FORGOT_PASSWORD } from '../../utils/createEmailUrl/Prefixes';
import sendEmail from '../../utils/SendEmail';

@Resolver(of => User)
class UserForgotPasswordResolver {
  @Mutation(returns => Boolean)
  async forgotPassword(@Arg('input')
  {
    email
  }: UserForgotPasswordInput): Promise<Boolean> {
    const user = await User.findOne({ where: { email } });

    if (!user) {
      return false;
    }

    const forgotPasswordLink = await createEmailUrl(user.id, FORGOT_PASSWORD);
    await sendEmail(email, forgotPasswordLink);

    return true;
  }
}

export default UserForgotPasswordResolver;
