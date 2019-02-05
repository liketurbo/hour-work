import {
  registerDecorator,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface
} from 'class-validator';
import User from '../../../../entity/User';

@ValidatorConstraint({ async: true })
export class IsEmailAlreadyExistsConstraint
  implements ValidatorConstraintInterface {
  async validate(email: string) {
    const user = await User.findOne({ where: { email } });

    if (user) {
      return false;
    }
    return true;
  }
}

const IsEmailAlreadyExists = (validationOptions?: ValidationOptions) => (
  object: Object,
  propertyName: string
) => {
  registerDecorator({
    target: object.constructor,
    propertyName: propertyName,
    options: validationOptions,
    constraints: [],
    validator: IsEmailAlreadyExistsConstraint
  });
};
export default IsEmailAlreadyExists;
