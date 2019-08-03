import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Button from './';

storiesOf('Components | Button', module).add('with text', () => (
  <Button onClick={action('button-click')}>Hello Button</Button>
));
