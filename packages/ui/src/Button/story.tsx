import * as React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { muiTheme } from 'storybook-addon-material-ui';

import Button from '.';
import theme from '../theme';

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
