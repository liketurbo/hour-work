import { Query } from 'type-graphql';
import Job from '../../entities/Job';

class JobFetchAllResolver {
  @Query(returns => [Job])
  async jobFetchAll(): Promise<Job[]> {
    return Job.find();
  }
}

export default JobFetchAllResolver;
