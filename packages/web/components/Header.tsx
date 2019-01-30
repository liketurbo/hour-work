import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/styles';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Router from 'next/router';
import { useMutation, useQuery } from 'react-apollo-hooks';
import {
  UserLogoutMutation,
  UserLogoutDocument,
  UserMeDocument,
  UserMeQuery
} from './ApolloComponents';

const useStyles = makeStyles((theme: any) => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white
    }
  },
  appBar: {
    position: 'relative'
  },
  toolBar: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  rightSegment: {
    display: 'flex',
    alignItems: 'center'
  },
  userButton: {
    marginLeft: theme.spacing.unit * 1
  }
}));

const Header = () => {
  const classes = useStyles();

  const logout = useMutation<UserLogoutMutation>(UserLogoutDocument);
  const { data, error, loading } = useQuery<UserMeQuery>(UserMeDocument, {
    suspend: false
  });

  if (error) {
    return <div>{JSON.stringify(error)}</div>;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <AppBar position="static" color="default" className={classes.appBar}>
      <Toolbar className={classes.toolBar}>
        <div>
          <Button onClick={() => Router.push('/jobs')}>Jobs</Button>
          <Button onClick={() => Router.push('/jobs/create')}>
            Create job
          </Button>
        </div>

        <div className={classes.rightSegment}>
          {data.me ? (
            <Fragment>
              <Typography>{data.me.firstName}</Typography>
              <Button
                variant="outlined"
                onClick={async () =>
                  await logout({ refetchQueries: [{ query: UserMeDocument }] })
                }
                className={classes.userButton}
              >
                Logout
              </Button>
            </Fragment>
          ) : (
            <Fragment>
              <Button
                variant="outlined"
                onClick={() => Router.push('/sign-in')}
                className={classes.userButton}
              >
                Sign in
              </Button>
              <Button
                variant="outlined"
                onClick={() => Router.push('/sign-up')}
                className={classes.userButton}
              >
                Sign up
              </Button>
            </Fragment>
          )}
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
