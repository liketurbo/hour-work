import * as React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { muiTheme } from 'storybook-addon-material-ui';
import Button from '../Button';
import ButtonGroup from '.';
import theme from '../theme';

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
