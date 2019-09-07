import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Paragraph } from './';

export default { title: 'Components | Paragraph', component: Paragraph };
export const text = () => <Paragraph>This is a simple paragraph.</Paragraph>;
