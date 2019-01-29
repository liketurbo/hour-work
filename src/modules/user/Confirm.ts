import { Arg, Mutation, Resolver } from 'type-graphql';
import User from '../../entities/User';
import redis from '../../middlewares/redis';
import { CONFIRM_EMAIL } from '../../utils/createEmailUrl/Prefixes';

@Resolver(of => User)
class UserConfirmResolver {
  @Mutation(returns => Boolean)
  async confirm(@Arg('token') token: string): Promise<Boolean> {
    const userId = await redis.get(CONFIRM_EMAIL + token);

    if (!userId) {
      return false;
    }

    await redis.del(CONFIRM_EMAIL + token);

    await User.update({ id: parseInt(userId, 10) }, { confirmed: true });

    return true;
  }
}

export default UserConfirmResolver;
