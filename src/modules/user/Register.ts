import { hash } from 'bcryptjs';
import { Arg, Mutation, Resolver } from 'type-graphql';
import UserRegisterInput from './register/RegisterInput';
import User from '../../entities/User';
import createEmailUrl from '../../utils/CreateEmailUrl';
import { CONFIRM_EMAIL } from '../../utils/createEmailUrl/Prefixes';
import sendEmail from '../../utils/SendEmail';

@Resolver(of => User)
class UserRegisterResolver {
  @Mutation(returns => User)
  async register(@Arg('input')
  {
    firstName,
    email,
    password
  }: UserRegisterInput): Promise<User> {
    const hashedPassword = await hash(password, 12);

    const user = await User.create({
      firstName,
      email,
      password: hashedPassword
    }).save();

    const confirmEmailLink = await createEmailUrl(user.id, CONFIRM_EMAIL);
    await sendEmail(email, confirmEmailLink);

    return user;
  }
}

export default UserRegisterResolver;
