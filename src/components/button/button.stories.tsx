import React from 'react';
import { action } from '@storybook/addon-actions';
import { Button } from '.';

export default { title: 'Components | Button', component: Button };

export const button = () => (
  <Button onClick={action('button-click')}>Button</Button>
);

export const twoButtons = () => (
  <div>
    <Button onClick={action('button-click')}>Cancel</Button>
    &nbsp; &nbsp; &nbsp; &nbsp;
    <Button onClick={action('button-click')}>Next</Button>
  </div>
);
