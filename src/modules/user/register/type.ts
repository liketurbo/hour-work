import { Field, InputType } from 'type-graphql';
import User from '../../../entities/User';

@InputType()
class UserRegisterInput implements Partial<User> {
  @Field()
  firstName: string;

  @Field()
  email: string;

  @Field()
  password: string;
}

export default UserRegisterInput;
