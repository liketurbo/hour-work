import { hash } from 'bcryptjs';
import { Arg, Mutation, Resolver } from 'type-graphql';
import UserRegisterInput from './register/RegisterInput';
import User from '../../entities/User';

@Resolver(of => User)
class UserRegisterResolver {
  @Mutation(() => User)
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

    return user;
  }
}

export default UserRegisterResolver;
