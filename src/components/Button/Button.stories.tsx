import { Button } from './Button';
import Logo from "../../icons/arrow-right.svg?react";

export default {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    onClick: { action: 'onClick' },
  },
};

export const Regular = {
  args: {
    Icon: Logo,
    label: 'Regular Button',
  },
};

export const Small = {
  args: {
    size: 'small',
    label: 'Small Button',
  },
};
