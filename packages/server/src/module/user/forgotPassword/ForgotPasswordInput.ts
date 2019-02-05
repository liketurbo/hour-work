import { InputType } from 'type-graphql';
import { UserInputEmailMixin } from '../common/CommonInput';

@InputType()
class UserForgotPasswordInput extends UserInputEmailMixin(class {}) {}

export default UserForgotPasswordInput;
