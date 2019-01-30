import { Field, InputType } from 'type-graphql';
import Job from '../../../entities/Job';

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
