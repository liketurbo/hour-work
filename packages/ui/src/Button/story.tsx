import React from 'react';
import { muiTheme } from 'storybook-addon-material-ui';

import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';

import theme from '../theme';
import Button from './';

storiesOf('Button', module)
  .addDecorator(muiTheme([theme]))
  .add('default', () => (
    <Button color="default" onClick={action('clicked')}>
      Default
    </Button>
  ))
  .add('primary', () => (
    <Button color="primary" onClick={action('clicked')}>
      Primary
    </Button>
  ));
