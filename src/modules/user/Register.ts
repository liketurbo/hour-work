import { hash } from 'bcryptjs';
import { Arg, Mutation, Resolver } from 'type-graphql';
import UserRegisterInput from './register/RegisterInput';
import User from '../../entities/User';
import createEmailUrl from '../../utils/createEmailUrl';
import sendEmail from '../../utils/sendEmail';

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

    const confirmEmailLink = await createEmailUrl(user.id, 'confirmEmail');
    await sendEmail(email, confirmEmailLink);

    return user;
  }
}

export default UserRegisterResolver;
