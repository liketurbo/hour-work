import '../../lib/bootstrap';
// --- Post bootstrap -----
import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Layout from '../../components/Layout';
import { Form, Field } from '../../components/FormikForm';
import {
  JobCreateInput,
  JobCreateDocument,
  JobCreateMutation,
  JobCreateVariables,
  JobFetchAllDocument
} from '../../components/ApolloComponents';
import { useMutation } from 'react-apollo-hooks';
import Router from 'next/router';

const useStyles = makeStyles((theme: any) => ({
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 2,
    marginRight: theme.spacing.unit * 2,
    [theme.breakpoints.up(600 + theme.spacing.unit * 2 * 2)]: {
      width: 600,
      marginLeft: 'auto',
      marginRight: 'auto'
    }
  },
  paper: {
    marginTop: theme.spacing.unit * 3,
    marginBottom: theme.spacing.unit * 3,
    padding: theme.spacing.unit * 2,
    [theme.breakpoints.up(600 + theme.spacing.unit * 3 * 2)]: {
      marginTop: theme.spacing.unit * 6,
      marginBottom: theme.spacing.unit * 6,
      padding: theme.spacing.unit * 3
    }
  }
}));

const JobCreate = () => {
  const classes = useStyles();
  const mutate = useMutation<JobCreateMutation, JobCreateVariables>(
    JobCreateDocument
  );

  return (
    <Layout title="Create job" className={classes.layout}>
      <Paper className={classes.paper}>
        <Typography variant="h6" gutterBottom>
          Create job
        </Typography>
        <Form<JobCreateInput>
          initialValues={{
            description: '',
            location: '',
            title: ''
          }}
          onSubmit={async input => {
            await mutate({
              variables: { input },
              refetchQueries: [{ query: JobFetchAllDocument }]
            });
            Router.push('/jobs');
          }}
        >
          <Grid container spacing={24}>
            <Grid item xs={12}>
              <Field name="title" />
            </Grid>
            <Grid item xs={12}>
              <Field name="location" />
            </Grid>
            <Grid item xs={12}>
              <Field name="description" />
            </Grid>
            <Grid item>
              <Button type="submit" variant="contained" color="primary">
                Create
              </Button>
            </Grid>
          </Grid>
        </Form>
      </Paper>
    </Layout>
  );
};

export default JobCreate;
