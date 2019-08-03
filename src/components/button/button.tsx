import React, { SFC } from 'react';
import styled from 'styled-components';

type ButtonProps = {
  onClick: () => void;
};

const StyledButton = styled.button`
  font-size: 30px;
  color: white;
  border: none;
  background-color: lightblue;
  padding: 5px;
`;

/**
 * Button component
 */
export const Button: SFC<ButtonProps> = ({
  onClick: handleClick,
  children,
}) => {
  return <StyledButton onClick={handleClick}>{children}</StyledButton>;
};

export default Button;
