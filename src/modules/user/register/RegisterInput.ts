import { IsEmail, Length } from 'class-validator';
import { Field, InputType } from 'type-graphql';
import IsEmailAlreadyExists from './registerInput/IsEmailAlreadyExists';
import { UserInputPasswordMixin } from '../common/CommonInput';

@InputType()
class UserRegisterInput extends UserInputPasswordMixin(class {}) {
  @Field()
  @Length(1, 255)
  firstName: string;

  @Field()
  @IsEmail()
  @IsEmailAlreadyExists({ message: 'email already in use' })
  email: string;
}

export default UserRegisterInput;
