import React, { FC } from 'react';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';
import { Paragraph } from '../../components';
import { colors } from './colors';

interface CircleProps {
  colour: string;
}

const StyledCircle = styled.div<CircleProps>`
  height: 100px;
  width: 100px;
  margin: 20px;
  border-radius: 50%;
  background-color: ${props => props.colour};
`;

const StyledParagraph = styled(Paragraph)<{ colour: string }>`
  color: ${props => props.colour};
  line-height: 100px;
`;

const Container = styled.div<{ colour?: string }>`
  background-color: ${props => props.colour};
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

const Circle: FC<CircleProps> = ({ colour }) => {
  return <StyledCircle colour={colour} />;
};

storiesOf('Tokens | Colours', module).add('Palette', () => (
  <Container>
    <StyledParagraph colour={colors.light.body}>Light</StyledParagraph>
    <StyledParagraph colour={colors.light.body}>Dark</StyledParagraph>

    <Container colour={colors.light.accent}>
      <Circle colour={colors.light.primary} />
      <StyledParagraph colour={colors.light.body}>Primary</StyledParagraph>
      <Circle colour={colors.light.secondary} />
      <StyledParagraph colour={colors.light.body}>Secondary</StyledParagraph>
      <Circle colour={colors.light.body} />
      <StyledParagraph colour={colors.light.body}>Body</StyledParagraph>
    </Container>

    <Container colour={colors.dark.accent}>
      <Circle colour={colors.dark.primary} />
      <StyledParagraph colour={colors.dark.body}>Primary</StyledParagraph>
      <Circle colour={colors.dark.secondary} />
      <StyledParagraph colour={colors.dark.body}>Secondary</StyledParagraph>
      <Circle colour={colors.dark.body} />
      <StyledParagraph colour={colors.dark.body}>Body</StyledParagraph>
    </Container>
  </Container>
));
