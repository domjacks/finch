import React, { FC } from 'react';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';
import { colors } from './colors';

interface CircleProps {
  /**
   * Function to call when button is clicked
   */
  colour: string;
}

const StyledCircle = styled.div<CircleProps>`
  height: 100px;
  width: 100px;
  margin: 20px;
  border-radius: 50%;
  background-color: ${props => props.colour};
`;

const DarkBackground = styled.div`
  background-color: ${colors.dark.accent};
  padding: 20px;
`;

const LightBackground = styled.div`
  background-color: ${colors.light.accent};
  padding: 20px;
`;

const Circle: FC<CircleProps> = ({ colour }) => {
  return <StyledCircle colour={colour} />;
};

storiesOf('Tokens | Colours', module).add('Light', () => (
  <LightBackground>
    <Circle colour={colors.light.primary} />
    <Circle colour={colors.light.body} />
  </LightBackground>
));

storiesOf('Tokens | Colours', module).add('Dark', () => (
  <DarkBackground>
    <Circle colour={colors.dark.primary} />
    <Circle colour={colors.dark.body} />
  </DarkBackground>
));
