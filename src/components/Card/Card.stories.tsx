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

// More on writing stories with args: https://storybook.js.org/docs/preact/writing-stories/args
export const Primary = {
  args: {
    primary: true,
    title: 'This is a card',
    children: <p>I am the content</p>
  },
};
