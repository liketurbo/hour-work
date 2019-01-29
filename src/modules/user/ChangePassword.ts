import bcrypt from 'bcryptjs';
import { Arg, Mutation, Resolver } from 'type-graphql';
import UserChangePasswordInput from './changePassword/ChangePasswordInput';
import User from '../../entities/User';
import redis from '../../middlewares/redis';
import { FORGOT_PASSWORD } from '../../utils/createEmailUrl/Prefixes';

@Resolver(of => User)
class UserChangePasswordResolver {
  @Mutation(returns => Boolean)
  async changePassword(@Arg('input')
  {
    token,
    password
  }: UserChangePasswordInput): Promise<Boolean> {
    const userId = await redis.get(FORGOT_PASSWORD + token);

    if (!userId) {
      return false;
    }

    await redis.del(FORGOT_PASSWORD + token);

    const hashedPassword = await bcrypt.hash(password, 12);
    await User.update(
      { id: parseInt(userId, 10) },
      { password: hashedPassword }
    );

    return true;
  }
}

export default UserChangePasswordResolver;
