import { Ctx, Mutation, Authorized } from 'type-graphql';
import Context from '../../types/context';

class UserLogoutResolver {
  @Authorized()
  @Mutation(returns => Boolean)
  async logout(@Ctx() { req, res }: Context): Promise<Boolean> {
    return new Promise((resolve, reject) => {
      req.session!.destroy(err => {
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
