import { Button } from './Button';

// More on how to set up stories at: https://storybook.js.org/docs/preact/writing-stories/introduction
export default {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    onClick: { action: 'onClick' },
  },
};

// More on writing stories with args: https://storybook.js.org/docs/preact/writing-stories/args
export const Primary = {
  args: {
    primary: true,
    label: 'Button',
  },
};

export const Secondary = {
  args: {
    label: 'Button',
  },
};

export const Large = {
  args: {
    size: 'large',
    label: 'Button',
  },
};

export const Small = {
  args: {
    size: 'small',
    label: 'Button',
  },
};
