import React, { FC } from 'react';
import styled from 'styled-components';
import { font, colors } from '../../tokens';

interface ButtonProps {
  /**
   * Function to call when button is clicked
   */
  onClick: () => void;
}

const StyledButton = styled.button`
  ${font}

  font-size: 20px;
  padding: 5px;

  color: ${colors.light.primary};
  border: 2px solid ${colors.light.primary};
  background-color: ${colors.light.accent};

  &:active,
  &:focus,
  &:hover {
    cursor: pointer;

    color: ${colors.light.accent};
    border: 2px solid ${colors.light.primary};
    background-color: ${colors.light.primary};
  }
`;

/**
 * Button component.
 */
export const Button: FC<ButtonProps> = ({ onClick: handleClick, children }) => {
  return <StyledButton onClick={handleClick}>{children}</StyledButton>;
};
