import '../../lib/bootstrap';
// --- Post bootstrap -----
import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import { useQuery } from 'react-apollo-hooks';
import Loading from '@hour-work/ui/Loading';
import Header from '@hour-work/ui/Header';
import Container from '@hour-work/ui/Container';
import Col from '@hour-work/ui/Col';
import Layout from '../../components/Layout';
import {
  OfferGetAllReceivedQuery,
  OfferGetAllReceivedDocument,
  OfferGetAllOfferedDocument,
  OfferGetAllOfferedQuery
} from '../../components/ApolloComponents';

const OffersIndex = () => {
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
    <Layout title="Offers">
      <Container size={80} spacing={40} alignItems="flex-end">
        <Col xs={12}>
          <Header type="h6">Received Offers</Header>
        </Col>
        {allReceivedOffers.loading ? (
          <Loading />
        ) : allReceivedOffers && allReceivedOffers.data ? (
          allReceivedOffers.data.offerGetAllReceived.map(offer => (
            <Col key={offer.id} xs={12} sm={6} md={4}>
              <Card>
                <CardHeader
                  title={offer.job.title}
                  subheader={offer.owner.firstName}
                  titleTypographyProps={{ align: 'center' }}
                  subheaderTypographyProps={{ align: 'center' }}
                />
              </Card>
            </Col>
          ))
        ) : null}
      </Container>
      <Container size={80} spacing={40} alignItems="flex-end">
        <Col xs={12}>
          <Header type="h6">Sent Offers</Header>
        </Col>
        {allOfferedOffers.loading ? (
          <Loading />
        ) : allOfferedOffers && allOfferedOffers.data ? (
          allOfferedOffers.data.offerGetAllOffered.map(offer => (
            <Col key={offer.id} xs={12} sm={6} md={4}>
              <Card>
                <CardHeader
                  title={offer.job.title}
                  subheader={offer.job.owner.firstName}
                  titleTypographyProps={{ align: 'center' }}
                  subheaderTypographyProps={{ align: 'center' }}
                />
              </Card>
            </Col>
          ))
        ) : null}
      </Container>
    </Layout>
  );
};

export default OffersIndex;
