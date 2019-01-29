import { Field, InputType } from 'type-graphql';
import { UserInputPasswordMixin } from '../common/CommonInput';

@InputType()
class UserChangePasswordInput extends UserInputPasswordMixin(class {}) {
  @Field()
  token: string;
}

export default UserChangePasswordInput;
