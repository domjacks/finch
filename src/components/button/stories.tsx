import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from './';

storiesOf('Components|Button', module).add('with text', () => (
  <Button>Hello Button</Button>
));
