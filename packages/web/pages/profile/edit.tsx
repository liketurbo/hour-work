import '../../lib/bootstrap';
// --- Post bootstrap -----
import React from 'react';
import Container from '@hour-work/ui/Container';
import Col from '@hour-work/ui/Col';
import Button from '@hour-work/ui/Button';
import Header from '@hour-work/ui/Header';
import Loading from '@hour-work/ui/Loading';
import { useQuery } from 'react-apollo-hooks';
import get from 'lodash/get';
import Layout from '../../components/Layout';
import { Field, Form } from '../../components/FormikForm';
import { UserMeQuery, UserMeDocument } from '../../components/ApolloComponents';

const ProfileEdit = () => {
  const currentUser = useQuery<UserMeQuery>(UserMeDocument, { suspend: false });

  return (
    <Layout title="Profile - Edit">
      {currentUser.loading ? (
        <Loading />
      ) : (
        <Form
          initialValues={{
            firstName: get(currentUser, 'data.me.firstName'),
            email: get(currentUser, 'data.me.email')
          }}
          onSubmit={values => {
            console.log(values);
          }}
        >
          {({ isSubmitting }) => (
            <Container size={80} top={3} spacing={16}>
              <Col xs={12}>
                <Header type="h6">Editing profile</Header>
              </Col>
              <Col xs={12}>
                <Field name="firstName" />
              </Col>
              <Col xs={12}>
                <Field name="email" />
              </Col>
              <Col xs={2}>
                <Button type="submit" color="primary" disabled={isSubmitting}>
                  Save
                </Button>
              </Col>
            </Container>
          )}
        </Form>
      )}
    </Layout>
  );
};

export default ProfileEdit;
