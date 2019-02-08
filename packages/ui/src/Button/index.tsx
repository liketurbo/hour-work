import React from 'react';
import MUIButton, {
  ButtonProps as MUIButtonProps
} from '@material-ui/core/Button';

interface ButtonProps {
  color?: MUIButtonProps['color'];
  disabled?: MUIButtonProps['disabled'];
  type?: MUIButtonProps['type'];
}

const Button: React.ComponentType<ButtonProps> = ({ children, ...rest }) => (
  <MUIButton fullWidth={true} variant="contained" {...rest}>
    {children}
  </MUIButton>
);

export default Button;
