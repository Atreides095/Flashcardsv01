import styled from 'styled-components';

export const StyledCollectionArea = styled.div`
    flex-grow: 1;
    display: flex;
`;

export const StyledListBox = styled.div`
    background-color: ${({ dark }) =>
        dark ? 'var(--grey-dark)' : 'var(--grey-light)'};
    color: ${({ dark }) => (dark ? 'var(--grey-light)' : 'var(--grey-dark)')};
    height: 100%;
    flex-grow: 1;
    flex-basis: 100%;
    position: relative;
    padding-block: 1rem;
`;

export const BoxHeader = styled.div`
    display: flex;
    margin-left: 2rem;
    gap: 1rem;
`;

export const ListContainer = styled.div`
    margin-top: 1rem;
    max-size: 100%;
    overflow-y: auto;
`;

export const DeckItem = styled.p`
    width: 100%;
    text-align: left;
    cursor: pointer;
    padding-inline: 2rem;
    padding-block: 0.3rem;
    transition: color 0.1s ease-out, background-color 0.3s ease-out;
    background-color: ${({ active, dark }) =>
        active && dark ? 'var(--grey-dark)' : 'var(--grey-light)'};
    color: ${({ active, dark }) =>
        active && dark ? 'var(--grey-light)' : 'var(--grey-dark)'};

    &:hover {
        /* color: ${({ active }) => (active ? '' : 'var(--black)')}; */
        filter: brightness(0.95);
    }
`;

export const CardItem = styled.div`
    display: flex;
    padding-inline: 2rem;
    padding-block: 0.3rem;
    width: 100%;
    text-align: left;
    /* cursor: pointer; */
    transition: color 0.1s ease-out, background-color 0.3s ease-out;
    overflow-x: hidden;
    justify-content: space-between;

    & > * {
        flex-grow: 1;
        width: 50%;
    }

    & > p:nth-child(1) {
        font-weight: 700;
    }

    & > p:nth-child(2) {
    }
`;

export const BoxButton = styled.button`
    /* background-color: ${({ dark }) =>
        dark ? 'var(--grey-dark)' : 'var(--grey-light)'}; */
    /* background-color: ${({ dark }) =>
        dark ? 'var(--grey-light)' : 'var(--grey-dark)'}; */
    background-color: transparent;
    /* color: ${({ dark }) =>
        dark ? 'var(--grey-dark)' : 'var(--grey-light)'}; */
    color: var(--grey-dark);
    height: 1.6rem;
    width: 1.6rem;
    border-radius: 50%;
    border: none;
    font-size: 0.6rem;
    transition: background-color 0.3s ease-out;

    &:hover {
        background-color: var(--pink);
    }

    &:active {
        transform: scale(0.97);
    }
`;
