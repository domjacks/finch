import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Paragraph } from '../../components';

export default { title: 'Tokens | Typography' };

export const paragraph = () => (
  <Paragraph>This is a simple paragraph.</Paragraph>
);
