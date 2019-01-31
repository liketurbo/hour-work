import { Query, Ctx } from 'type-graphql';
import Offer from '../../entities/Offer';
import Context from '../../types/context';

class OfferGetAllReceivedResolver {
  @Query(returns => [Offer])
  async offerGetAllReceived(@Ctx() { req }: Context): Promise<Offer[]> {
    return Offer.createQueryBuilder('offer')
      .innerJoin('offer.job', 'job', 'offer.jobId = job.id')
      .where('job.ownerId = :id', { id: req.session.userId })
      .getMany();
  }
}

export default OfferGetAllReceivedResolver;
