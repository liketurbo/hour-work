import '../../lib/bootstrap';
// --- Post bootstrap -----
import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/styles';
import { useQuery } from 'react-apollo-hooks';
import Loading from '../../components/Loading';
import Layout from '../../components/Layout';
import {
  OfferGetAllReceivedQuery,
  OfferGetAllReceivedDocument,
  OfferGetAllOfferedDocument,
  OfferGetAllOfferedQuery
} from '../../components/ApolloComponents';
import { Typography } from '@material-ui/core';

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

  const allReceivedOffers = useQuery<OfferGetAllReceivedQuery>(
    OfferGetAllReceivedDocument,
    {
      suspend: false
    }
  );
  const allOfferedOffers = useQuery<OfferGetAllOfferedQuery>(
    OfferGetAllOfferedDocument,
    { suspend: false }
  );

  if (allReceivedOffers.error || allOfferedOffers.error) {
    return (
      <div>
        {JSON.stringify(allReceivedOffers.error)}
        {JSON.stringify(allOfferedOffers.error)}
      </div>
    );
  }

  return (
    <Layout title="Offers" className={classes.layout}>
      <Typography variant="overline">Received Offers</Typography>
      <Grid container spacing={40} alignItems="flex-end">
        {allReceivedOffers.loading ? (
          <Loading />
        ) : allReceivedOffers && allReceivedOffers.data ? (
          allReceivedOffers.data.offerGetAllReceived.map(offer => (
            <Grid item key={offer.id} xs={12} sm={6} md={4}>
              <Card>
                <CardHeader
                  title={offer.job.title}
                  subheader={offer.owner.firstName}
                  titleTypographyProps={{ align: 'center' }}
                  subheaderTypographyProps={{ align: 'center' }}
                  className={classes.cardHeader}
                />
              </Card>
            </Grid>
          ))
        ) : null}
      </Grid>
      <Typography variant="overline">Sent Offers</Typography>
      <Grid container spacing={40} alignItems="flex-end">
        {allOfferedOffers.loading ? (
          <Loading />
        ) : allOfferedOffers && allOfferedOffers.data ? (
          allOfferedOffers.data.offerGetAllOffered.map(offer => (
            <Grid item key={offer.id} xs={12} sm={6} md={4}>
              <Card>
                <CardHeader
                  title={offer.job.title}
                  subheader={offer.job.owner.firstName}
                  titleTypographyProps={{ align: 'center' }}
                  subheaderTypographyProps={{ align: 'center' }}
                  className={classes.cardHeader}
                />
              </Card>
            </Grid>
          ))
        ) : null}
      </Grid>
    </Layout>
  );
};

export default JobsIndex;
