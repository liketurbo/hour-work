import { Ctx, Mutation, Resolver } from 'type-graphql';
import User from '../../entities/User';
import Context from '../../types/context';

@Resolver(of => User)
class UserLogoutResolver {
  @Mutation(returns => Boolean)
  async logout(@Ctx() { req, res }: Context): Promise<Boolean> {
    return new Promise((resolve, reject) => {
      req.session.destroy(err => {
        if (err) {
          console.log(err);
          return reject(false);
        }

        res.clearCookie('sid');
        return resolve(true);
      });
    });
  }
}

export default UserLogoutResolver;
