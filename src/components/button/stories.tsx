import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Button } from './';

storiesOf('Components | Button', module)
  .add('Button', () => <Button onClick={action('button-click')}>Button</Button>)
  .add('Two buttons', () => (
    <div>
      <Button onClick={action('button-click')}>Cancel</Button>
      &nbsp; &nbsp; &nbsp; &nbsp;
      <Button onClick={action('button-click')}>Next</Button>
    </div>
  ));
