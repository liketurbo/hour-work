import { Arg, Mutation, Resolver } from 'type-graphql';
import UserForgotPasswordInput from './forgotPassword/ForgotPasswordInput';
import User from '../../entities/User';
import createEmailUrl from '../../utils/createEmailUrl';
import sendEmail from '../../utils/sendEmail';

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

    const forgotPasswordLink = await createEmailUrl(user.id, 'forgotPassword');
    await sendEmail(email, forgotPasswordLink);

    return true;
  }
}

export default UserForgotPasswordResolver;
