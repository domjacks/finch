import React, { FC } from 'react';
import styled from 'styled-components';
import { font, colors } from '../../tokens';

const StyledParagraph = styled.p`
  ${font}

  font-size: 20px;

  color: ${colors.light.primary};
`;

/**
 * Paragraph component.
 */
export const Paragraph: FC<{}> = ({ children }) => {
  return <StyledParagraph>{children}</StyledParagraph>;
};
