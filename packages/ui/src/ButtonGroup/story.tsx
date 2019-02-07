import * as React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Button from '../Button';
import ButtonGroup from '.';

storiesOf('ButtonGroup', module).add('3 buttons', () => (
  <ButtonGroup>
    <Button variant="contained" color="primary" onClick={action('clicked')}>
      Primary
    </Button>
    <Button variant="contained" color="secondary" onClick={action('clicked')}>
      Secondary
    </Button>
    <Button variant="contained" color="default" onClick={action('clicked')}>
      Default
    </Button>
  </ButtonGroup>
));
