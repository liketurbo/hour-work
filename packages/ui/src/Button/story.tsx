import * as React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Button from '.';

storiesOf('Button', module)
  .add('default', () => (
    <Button variant="contained" color="default" onClick={action('clicked')}>
      Default
    </Button>
  ))
  .add('primary', () => (
    <Button variant="contained" color="primary" onClick={action('clicked')}>
      Primary
    </Button>
  ));
