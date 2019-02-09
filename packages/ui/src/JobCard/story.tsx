import faker from 'faker';
import range from 'lodash/range';
import React from 'react';
import { muiTheme } from 'storybook-addon-material-ui';

import { storiesOf } from '@storybook/react';

import Container from '../Container';
import theme from '../theme';
import JobCard from './';

storiesOf('JobCard', module)
  .addDecorator(muiTheme([theme]))
  .add('single card', () => (
    <JobCard
      title={faker.name.jobTitle()}
      description={faker.name.jobDescriptor()}
      date={faker.date.recent()}
      distance={faker.random.number()}
      location={faker.address.city()}
      owner={{
        name: faker.name.findName(),
        amountOfRating: faker.random.number(),
        rating: faker.random.number(5)
      }}
      price={faker.random.number()}
      views={faker.random.number()}
    />
  ))
  .add('multiple cards', () => (
    <Container>
      {range(10).map(number => (
        <JobCard
          key={number}
          title={faker.name.jobTitle()}
          description={faker.lorem.paragraphs()}
          date={faker.date.recent()}
          distance={faker.random.number()}
          location={faker.address.city()}
          owner={{
            name: faker.name.findName(),
            amountOfRating: faker.random.number(),
            rating: faker.random.number(5)
          }}
          price={faker.random.number()}
          views={faker.random.number()}
        />
      ))}
    </Container>
  ));
