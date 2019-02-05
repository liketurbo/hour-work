import { Field, InputType } from 'type-graphql';
import Job from '../../../entity/Job';

@InputType()
class JobCreateInput implements Partial<Job> {
  @Field()
  title: string;

  @Field()
  description: string;

  @Field()
  location: string;
}

export default JobCreateInput;
