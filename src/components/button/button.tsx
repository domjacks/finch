import React, { FC } from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  font-size: 30px;
  border: solid white;
`;

export const Button: FC<{}> = ({ children }) => {
  return <StyledButton>{children}</StyledButton>;
};

export default Button;
