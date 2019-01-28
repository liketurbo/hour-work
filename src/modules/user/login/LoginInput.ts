import { IsEmail } from 'class-validator';
import { Field, InputType } from 'type-graphql';
import User from '../../../entities/User';

@InputType()
class UserLoginInput implements Partial<User> {
  @Field()
  @IsEmail()
  email: string;

  @Field()
  password: string;
}

export default UserLoginInput;
