import { IsEmail } from 'class-validator';
import { Field, InputType } from 'type-graphql';
import User from '../../../entities/User';

@InputType()
class UserForgotPasswordInput implements Partial<User> {
  @Field()
  @IsEmail()
  email: string;
}

export default UserForgotPasswordInput;
