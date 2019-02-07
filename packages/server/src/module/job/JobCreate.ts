import {
  Arg,
  Mutation,
  Resolver,
  Authorized,
  Ctx,
  FieldResolver,
  Root
} from 'type-graphql';
import JobCreateInput from './jobCreate/JobCreateInput';
import Job from '../../entity/Job';
import Context from '../../types/context';
import User from '../../entity/User';

@Resolver(of => Job)
class JobCreateResolver {
  @Authorized()
  @Mutation(returns => Job)
  async jobCreate(
    @Arg('input')
    { title, location, description }: JobCreateInput,
    @Ctx() { req }: Context
  ): Promise<Job> {
    const job = await Job.create({
      title,
      location,
      description,
      ownerId: req.session!.userId
    }).save();

    return job;
  }

  @FieldResolver()
  async owner(@Root() job: Job) {
    return User.findOne(job.ownerId);
  }
}

export default JobCreateResolver;
