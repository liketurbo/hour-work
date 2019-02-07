import { Query, Ctx, Authorized } from 'type-graphql';
import Offer from '../../entity/Offer';
import Context from '../../types/context';

class OfferGetAllOfferedResolver {
  @Authorized()
  @Query(returns => [Offer])
  async offerGetAllOffered(@Ctx() { req }: Context): Promise<Offer[]> {
    return Offer.createQueryBuilder('offer')
      .innerJoin('offer.job', 'job', 'offer.jobId = job.id')
      .where('offer.ownerId = :id', { id: req.session!.userId })
      .getMany();
  }
}

export default OfferGetAllOfferedResolver;
