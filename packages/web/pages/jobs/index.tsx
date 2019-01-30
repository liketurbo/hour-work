import '../../lib/bootstrap';
// --- Post bootstrap -----
import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/styles';
import { useQuery } from 'react-apollo-hooks';
import {
  JobFetchAllDocument,
  JobFetchAllQuery
} from '../../components/ApolloComponents';
import Layout from '../../components/Layout';
import Loading from '../../components/Loading';

const useStyles = makeStyles((theme: any) => ({
  layout: {
    width: 'auto',
    marginTop: theme.spacing.unit * 3,
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(900 + theme.spacing.unit * 3 * 2)]: {
      width: 900,
      marginLeft: 'auto',
      marginRight: 'auto'
    }
  },
  cardHeader: {
    backgroundColor: theme.palette.grey[200]
  },
  cardPricing: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'baseline',
    marginBottom: theme.spacing.unit * 2
  },
  cardActions: {
    [theme.breakpoints.up('sm')]: {
      paddingBottom: theme.spacing.unit * 2
    }
  }
}));

const JobsIndex = () => {
  const classes = useStyles();
  const { data, error, loading } = useQuery<JobFetchAllQuery>(
    JobFetchAllDocument,
    { suspend: false }
  );

  if (error) {
    return <div>{JSON.stringify(error)}</div>;
  }

  return (
    <Layout title="Jobs" className={classes.layout}>
      <Grid container spacing={40} alignItems="flex-end">
        {loading ? (
          <Loading />
        ) : (
          data.jobFetchAll.map(job => (
            <Grid item key={job.id} xs={12} sm={6} md={4}>
              <Card>
                <CardHeader
                  title={job.title}
                  titleTypographyProps={{ align: 'center' }}
                  className={classes.cardHeader}
                />
                <CardContent>
                  <Typography variant="subtitle1" align="center">
                    {job.description}
                  </Typography>
                </CardContent>
                <CardActions className={classes.cardActions}>
                  <Button fullWidth variant="outlined" color="primary">
                    Send offer
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))
        )}
      </Grid>
    </Layout>
  );
};

export default JobsIndex;
