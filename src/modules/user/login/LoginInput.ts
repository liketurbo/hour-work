import { IsEmail, Length } from 'class-validator';
import { Field, InputType } from 'type-graphql';

@InputType()
class UserLoginInput {
  @Field()
  @IsEmail()
  email: string;

  @Field()
  @Length(5)
  password: string;
}

export default UserLoginInput;
