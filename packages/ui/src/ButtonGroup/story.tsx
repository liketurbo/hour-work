import React from 'react';
import { muiTheme } from 'storybook-addon-material-ui';

import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';

import Button from '../Button';
import theme from '../theme';
import ButtonGroup from './';

storiesOf('ButtonGroup', module)
  .addDecorator(muiTheme([theme]))
  .add('3 buttons', () => (
    <ButtonGroup>
      <Button color="primary" onClick={action('clicked')}>
        Primary
      </Button>
      <Button color="secondary" onClick={action('clicked')}>
        Secondary
      </Button>
      <Button color="default" onClick={action('clicked')}>
        Default
      </Button>
    </ButtonGroup>
  ));
