import '../../lib/bootstrap';
// --- Post bootstrap -----
import React from 'react';
import Container from '@hour-work/ui/Container';
import Col from '@hour-work/ui/Col';
import Button from '@hour-work/ui/Button';
import Header from '@hour-work/ui/Header';
import { useMutation } from 'react-apollo-hooks';
import Layout from '../../components/Layout';
import { Field, Form } from '../../components/FormikForm';
import {
  JobCreateMutation,
  JobCreateVariables,
  JobCreateDocument,
  JobFetchAllDocument
} from '../../components/ApolloComponents';
import Router from 'next/router';

const JobsCreate = () => {
  const mutate = useMutation<JobCreateMutation, JobCreateVariables>(
    JobCreateDocument
  );

  return (
    <Layout title="Jobs - Create">
      <Form
        initialValues={{
          title: '',
          location: '',
          description: ''
        }}
        onSubmit={async input => {
          await mutate({
            variables: { input },
            refetchQueries: [{ query: JobFetchAllDocument }]
          });

          Router.push('/jobs');
        }}
      >
        {({ isSubmitting }) => (
          <Container size={80} top={3} spacing={16}>
            <Col xs={12}>
              <Header type="h6">Create job</Header>
            </Col>
            <Col xs={12}>
              <Field name="title" />
            </Col>
            <Col xs={12}>
              <Field name="location" />
            </Col>
            <Col xs={12}>
              <Field name="description" />
            </Col>
            <Col xs={2}>
              <Button type="submit" color="primary" disabled={isSubmitting}>
                Create
              </Button>
            </Col>
          </Container>
        )}
      </Form>
    </Layout>
  );
};

export default JobsCreate;
