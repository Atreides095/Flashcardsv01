import React from 'react';
import {
    StyledListBox,
    ListContainer,
    BoxButton,
    BoxHeader,
} from './Collection.styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';

const ListBox = ({ children, dark, title, grid }) => {
    return (
        <StyledListBox dark={dark} grid={grid}>
            <BoxHeader>
                <h4>{title}</h4>
                <BoxButton dark={dark}>
                    <FontAwesomeIcon icon={faPlusCircle} size="2x" />
                </BoxButton>
            </BoxHeader>
            <ListContainer>{children}</ListContainer>
        </StyledListBox>
    );
};

export default ListBox;
