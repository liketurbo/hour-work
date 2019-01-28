import { IsEmail, Length } from 'class-validator';
import { Field, InputType } from 'type-graphql';
import IsEmailAlreadyExists from './registerInput/IsEmailAlreadyExists';
import User from '../../../entities/User';

@InputType()
class UserRegisterInput implements Partial<User> {
  @Field()
  @Length(1, 100)
  firstName: string;

  @Field()
  @IsEmail()
  @IsEmailAlreadyExists({ message: 'email already in use' })
  email: string;

  @Field()
  password: string;
}

export default UserRegisterInput;
