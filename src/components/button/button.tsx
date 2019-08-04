import React, { FC } from 'react';
import styled from 'styled-components';

interface Button {
  /**
   * Function to call when button is clicked
   */
  onClick: () => void;
}

const StyledButton = styled.button`
  font-size: 30px;
  color: white;
  border: none;
  background-color: lightblue;
  padding: 5px;
`;

/**
 * Button component.
 */
export const Button: FC<Button> = ({ onClick: handleClick, children }) => {
  return <StyledButton onClick={handleClick}>{children}</StyledButton>;
};
