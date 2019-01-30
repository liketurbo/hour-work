import React from 'react';
import { makeStyles } from '@material-ui/styles';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Router from 'next/router';

const useStyles = makeStyles((theme: any) => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white
    }
  },
  appBar: {
    position: 'relative'
  },
  toolbarTitle: {
    flex: 1
  }
}));

const Header = () => {
  const classes = useStyles();

  return (
    <AppBar position="static" color="default" className={classes.appBar}>
      <Toolbar>
        <Typography
          variant="h6"
          color="inherit"
          noWrap
          className={classes.toolbarTitle}
        >
          Hour Work
        </Typography>
        <Button onClick={() => Router.push('/sign-in')}>Sign in</Button>
        <Button onClick={() => Router.push('/sign-up')}>Sign up</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
