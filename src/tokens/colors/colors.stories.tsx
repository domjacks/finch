import React, { FC } from 'react';
import styled from 'styled-components';
import { Paragraph } from '../../components';
import { colors } from './colors';

interface CircleProps {
  color: string;
}

const StyledCircle = styled.div<CircleProps>`
  height: 100px;
  width: 100px;
  margin: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

const StyledParagraph = styled(Paragraph)<{ color: string }>`
  color: ${(props) => props.color};
  line-height: 100px;
`;

const Container = styled.div<{ color?: string }>`
  background-color: ${(props) => props.color};
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

const Circle: FC<CircleProps> = ({ color }) => {
  return <StyledCircle color={color} />;
};

export default { title: 'Tokens | Colors' };

export const palette = () => (
  <Container>
    <StyledParagraph color={colors.light.body}>Light</StyledParagraph>
    <StyledParagraph color={colors.light.body}>Dark</StyledParagraph>

    <Container color={colors.light.accent}>
      <Circle color={colors.light.primary} />
      <StyledParagraph color={colors.light.body}>Primary</StyledParagraph>
      <Circle color={colors.light.secondary} />
      <StyledParagraph color={colors.light.body}>Secondary</StyledParagraph>
      <Circle color={colors.light.body} />
      <StyledParagraph color={colors.light.body}>Body</StyledParagraph>
    </Container>

    <Container color={colors.dark.accent}>
      <Circle color={colors.dark.primary} />
      <StyledParagraph color={colors.dark.body}>Primary</StyledParagraph>
      <Circle color={colors.dark.secondary} />
      <StyledParagraph color={colors.dark.body}>Secondary</StyledParagraph>
      <Circle color={colors.dark.body} />
      <StyledParagraph color={colors.dark.body}>Body</StyledParagraph>
    </Container>
  </Container>
);
