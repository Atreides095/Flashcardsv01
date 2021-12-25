import styled from 'styled-components';
import React from 'react';

const StyledBtn = styled.button``;

const Button = ({ children }) => {
    return <StyledBtn>{children}</StyledBtn>;
};

export default Button;
