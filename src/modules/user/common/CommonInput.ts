import { IsEmail, MinLength } from 'class-validator';
import { ClassType, Field, InputType } from 'type-graphql';

export const UserInputPasswordMixin = <T extends ClassType>(BaseClass: T) => {
  @InputType()
  class UserInputPassword extends BaseClass {
    @Field()
    @MinLength(5)
    password: string;
  }
  return UserInputPassword;
};

export const UserInputEmailMixin = <T extends ClassType>(BaseClass: T) => {
  @InputType()
  class UserInputEmail extends BaseClass {
    @Field()
    @IsEmail()
    email: string;
  }
  return UserInputEmail;
};
