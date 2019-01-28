import { hash } from 'bcryptjs';
import { Arg, Mutation, Resolver } from 'type-graphql';
import UserRegisterInput from './register/RegisterInput';
import User from '../../entities/User';
import createConfirmationUrl from '../../utils/createConfirmationUrl';
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

    const confirmationLink = await createConfirmationUrl(user.id);
    await sendEmail(email, confirmationLink);

    return user;
  }
}

export default UserRegisterResolver;
