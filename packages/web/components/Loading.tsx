import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme: any) => ({
  progress: {
    margin: theme.spacing.unit * 2
  }
}));

const Loading = () => {
  const classes = useStyles();

  return <CircularProgress className={classes.progress} />;
};

export default Loading;
