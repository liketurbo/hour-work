import React from 'react';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(() => ({
  buttonGroup: {
    display: 'flex',
    justifyContent: 'space-around'
  }
}));

const ButtonGroup: React.FC = ({ children }) => {
  const classes = useStyles();

  return <div className={classes.buttonGroup}>{children}</div>;
};

export default ButtonGroup;
