import { Ctx, Query } from 'type-graphql';
import User from '../../entity/User';
import Context from '../../types/context';

class UserMeResolver {
  @Query(returns => User, { nullable: true })
  async me(@Ctx() { req }: Context): Promise<User | null> {
    if (!req.session || !req.session.userId) {
      return null;
    }

    return User.findOne(req.session.userId);
  }
}

export default UserMeResolver;
