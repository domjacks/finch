import { Card } from './Card';
import { Button } from '../Button/Button'

const CardContent = () => {
  return (
    <>
      <p>This is the card content</p>
      <Button label="Click me"/>
    </>
  )
}

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
    children: <CardContent />
  },              
};

export const Large = {
  args: {
    primary: true,
    title: 'This is a card',
    size: 'large',
    children: <CardContent />
  },
};
