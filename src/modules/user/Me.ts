import { Ctx, Query, Resolver } from 'type-graphql';
import User from '../../entities/User';
import Context from '../../types/context';

@Resolver(of => User)
class UserMeResolver {
  @Query(returns => User, { nullable: true })
  async me(@Ctx() { req }: Context): Promise<User | null> {
    if (!req.session.userId) {
      return null;
    }

    return User.findOne(req.session.userId);
  }
}

export default UserMeResolver;
