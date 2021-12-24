import React from 'react';
import styled from 'styled-components';

const StyledBtn = styled.button`
    height: 1.7rem;
    background-color: var(--green-light);
    border: none;
    border-radius: 2px;

    &:hover {
        filter: brightness(0.8);
    }

    &:active {
        transform: scale(0.98);
    }
`;

const FormButton = ({ children }) => {
    return <StyledBtn>{children}</StyledBtn>;
};

export default FormButton;
