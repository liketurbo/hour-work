import '../lib/bootstrap';
// --- Post bootstrap -----
import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/styles';
import { Formik } from 'formik';
import { useMutation } from 'react-apollo-hooks';
import Router from 'next/router';
import {
  UserRegisterMutation,
  UserRegisterVariables,
  UserRegisterDocument,
  UserRegisterInput
} from '../components/ApolloComponents';
import Layout from '../components/Layout';

const useStyles = makeStyles((theme: any) => ({
  layout: {
    width: 'auto',
    display: 'block', // Fix IE 11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: 'auto',
      marginRight: 'auto'
    }
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme
      .spacing.unit * 3}px`
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.primary.main
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing.unit
  },
  submit: {
    marginTop: theme.spacing.unit * 3
  }
}));

const SignUp = () => {
  const classes = useStyles();
  const mutate = useMutation<UserRegisterMutation, UserRegisterVariables>(
    UserRegisterDocument
  );

  return (
    <Layout className={classes.layout} title="Sign up">
      <CssBaseline />
      <Paper className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <Formik<UserRegisterInput>
          onSubmit={async input => {
            await mutate({ variables: { input } });
            Router.push('/sign-in');
          }}
          initialValues={{
            firstName: '',
            email: '',
            password: ''
          }}
        >
          {({ handleSubmit, handleBlur, handleChange, values }) => (
            <form className={classes.form} onSubmit={handleSubmit}>
              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="email">First name</InputLabel>
                <Input
                  id="firstName"
                  name="firstName"
                  autoComplete="firstName"
                  autoFocus
                  value={values.firstName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </FormControl>{' '}
              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="email">Email address</InputLabel>
                <Input
                  id="email"
                  name="email"
                  autoComplete="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </FormControl>
              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="password">Password</InputLabel>
                <Input
                  name="password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </FormControl>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Sign up
              </Button>
            </form>
          )}
        </Formik>
      </Paper>
    </Layout>
  );
};

export default SignUp;
