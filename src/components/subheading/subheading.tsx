import React, { FC } from 'react';
import styled from 'styled-components';
import { font } from '../../tokens';

export interface SubheadingProps {
  className?: string;
}

const StyledSubheading = styled.p`
  ${font}

  font-size: 16px;
`;

/**
 * Subheading component.
 */
export const Subheading: FC<SubheadingProps> = ({ className, children }) => {
  return <StyledSubheading className={className}>{children}</StyledSubheading>;
};
