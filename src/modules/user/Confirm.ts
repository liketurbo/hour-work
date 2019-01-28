import { Arg, Mutation, Resolver } from 'type-graphql';
import User from '../../entities/User';
import redis from '../../middlewares/redis';

@Resolver(of => User)
class UserConfirmResolver {
  @Mutation(returns => Boolean)
  async confirm(@Arg('token') token: string): Promise<Boolean> {
    const userId = await redis.get(token);

    if (!userId) {
      return false;
    }

    await User.update({ id: parseInt(userId, 10) }, { confirmed: true });
    await redis.del(token);

    return true;
  }
}

export default UserConfirmResolver;
