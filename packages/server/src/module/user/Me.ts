import { Ctx, Query } from 'type-graphql';
import User from '../../entity/User';
import Context from '../../types/context';

class UserMeResolver {
  @Query(returns => User, { nullable: true })
  async me(@Ctx() { req }: Context): Promise<User | null> {
    if (!req.session || !req.session.userId) {
      return null;
    }

    return await User.findOne(req.session.userId) || null;
  }
}

export default UserMeResolver;
