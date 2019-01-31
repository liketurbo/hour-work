import {
  Arg,
  Mutation,
  Resolver,
  Authorized,
  Ctx,
  FieldResolver,
  Root
} from 'type-graphql';
import Job from '../../entities/Job';
import Context from '../../types/context';
import User from '../../entities/User';
import Offer from '../../entities/Offer';

@Resolver(of => Offer)
class OfferCreateResolver {
  @Authorized()
  @Mutation(returns => Offer)
  async offerCreate(
    @Arg('jobId') jobId: number,
    @Ctx() { req }: Context
  ): Promise<Offer> {
    const offer = await Offer.create({
      jobId,
      ownerId: req.session.userId
    }).save();

    return offer;
  }

  @FieldResolver()
  async owner(@Root() offer: Offer) {
    return User.findOne(offer.ownerId);
  }

  @FieldResolver()
  async job(@Root() offer: Offer) {
    return Job.findOne(offer.jobId);
  }
}

export default OfferCreateResolver;
