import { Length } from 'class-validator';
import { Field, InputType } from 'type-graphql';
import User from '../../../entities/User';

@InputType()
class UserChangePasswordInput implements Partial<User> {
  @Field()
  token: string;

  @Field()
  @Length(5)
  password: string;
}

export default UserChangePasswordInput;
