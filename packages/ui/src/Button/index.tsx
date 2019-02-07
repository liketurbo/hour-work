import React from 'react';
import MUIButton, { ButtonProps } from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/styles';
import theme from '../theme';

const useStyles = makeStyles(() => ({
  button: {
    margin: theme.spacing.unit
  }
}));

const Button: React.ComponentType<ButtonProps> = ({ children, ...rest }) => {
  const { button } = useStyles();

  return (
    <MUIButton className={button} {...rest}>
      {children}
    </MUIButton>
  );
};

export default Button;
