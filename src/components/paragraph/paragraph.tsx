import React, { FC } from "react";
import styled from "styled-components";
import { font } from "../../tokens";

export interface ParagraphProps {
  className?: string;
}

const StyledParagraph = styled.p`
  ${font}

  font-size: 20px;
`;

/**
 * Paragraph component.
 */
export const Paragraph: FC<ParagraphProps> = ({ className, children }) => {
  return <StyledParagraph className={className}>{children}</StyledParagraph>;
};
