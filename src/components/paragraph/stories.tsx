import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Paragraph } from './';

storiesOf('Components | Paragraph', module).add('Paragraph', () => (
  <Paragraph>This is a simple paragraph.</Paragraph>
));
