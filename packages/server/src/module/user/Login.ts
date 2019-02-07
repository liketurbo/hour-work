import { compare } from 'bcryptjs';
import { Arg, Ctx, Mutation } from 'type-graphql';
import UserLoginInput from './login/LoginInput';
import User from '../../entity/User';
import Context from '../../types/context';
import { GraphQLError } from 'graphql';

class UserLoginResolver {
  @Mutation(returns => User, { nullable: true })
  async login(
    @Arg('input')
    { email, password }: UserLoginInput,
    @Ctx() { req }: Context
  ): Promise<User | null> {
    const user = await User.findOne({ where: { email } });

    if (!user) {
      return null;
    }

    if (!user.confirmed || !user.password) {
      return null;
    }

    const valid = await compare(password, user.password);

    if (!valid) {
      return null;
    }

    if (!req.session) {
      throw new GraphQLError('session not provided');
    }

    req.session.userId = user.id;

    return user;
  }
}

export default UserLoginResolver;
