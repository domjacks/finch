import { Card } from './Card';

// More on how to set up stories at: https://storybook.js.org/docs/preact/writing-stories/introduction
export default {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
  argTypes: {
    onClick: { action: 'onClick' },
  },
};

export const Small = {
  args: {
    primary: true,
    title: 'This is a card',
    size: 'small',
    children: <p>I am the content</p>
  },
};

export const Large = {
  args: {
    primary: true,
    title: 'This is a card',
    size: 'large',
    children: <p>I am the content</p>
  },
};
