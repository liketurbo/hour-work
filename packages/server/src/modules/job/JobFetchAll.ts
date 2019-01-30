import { Query, Resolver } from 'type-graphql';
import Job from '../../entities/Job';

@Resolver(of => Job)
class JobFetchAllResolver {
  @Query(returns => [Job])
  async jobFetchAll(): Promise<Job[]> {
    return Job.find();
  }
}

export default JobFetchAllResolver;
