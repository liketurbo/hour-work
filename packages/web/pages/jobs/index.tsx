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
import { useQuery, useMutation } from 'react-apollo-hooks';
import {
  JobFetchAllDocument,
  JobFetchAllQuery,
  UserMeQuery,
  UserMeDocument,
  OfferCreateMutation,
  OfferCreateVariables,
  OfferCreateDocument
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

  const jobs = useQuery<JobFetchAllQuery>(JobFetchAllDocument, {
    suspend: false
  });
  const currentUser = useQuery<UserMeQuery>(UserMeDocument, { suspend: false });
  const createOffer = useMutation<OfferCreateMutation, OfferCreateVariables>(
    OfferCreateDocument
  );

  if (jobs.error || currentUser.error) {
    return (
      <div>
        {JSON.stringify(jobs.error)}
        {JSON.stringify(currentUser.error)}
      </div>
    );
  }

  return (
    <Layout title="Jobs" className={classes.layout}>
      <Grid container spacing={40} alignItems="flex-end">
        {jobs.loading || currentUser.loading ? (
          <Loading />
        ) : (
          jobs.data.jobFetchAll.map(job => (
            <Grid item key={job.id} xs={12} sm={6} md={4}>
              <Card>
                <CardHeader
                  title={job.title}
                  subheader={job.location}
                  titleTypographyProps={{ align: 'center' }}
                  subheaderTypographyProps={{ align: 'center' }}
                  className={classes.cardHeader}
                />
                <CardContent>
                  <Typography variant="subtitle1" align="center">
                    {job.description}
                  </Typography>
                </CardContent>
                {job.owner.id === currentUser.data.me.id ? null : (
                  <CardActions className={classes.cardActions}>
                    <Button
                      fullWidth
                      variant="outlined"
                      color="primary"
                      onClick={async () => {
                        await createOffer({
                          variables: { jobId: parseInt(job.id, 10) }
                        });
                      }}
                    >
                      Send offer
                    </Button>
                  </CardActions>
                )}
              </Card>
            </Grid>
          ))
        )}
      </Grid>
    </Layout>
  );
};

export default JobsIndex;
