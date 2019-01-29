import { InputType } from 'type-graphql';
import { UserInputEmailMixin, UserInputPasswordMixin } from '../common/CommonInput';

@InputType()
class UserLoginInput extends UserInputEmailMixin(
  UserInputPasswordMixin(class {})
) {}

export default UserLoginInput;
