import styled from 'styled-components';

export const StyledCard = styled.div`
    background-color: var(--white);
    width: 100%;
`;

export const CardLayout = styled.div`
    height: 10rem;
    width: 100%;
    margin-left: 2rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    justify-content: center;

    h1 {
        font-weight: 700;
    }
`;

export const DeckDetails = styled.div`
    font-size: 0.8rem;
    color: var(--grey-dark);
`;

export const StyledMidbar = styled.div`
    background-color: var(--black);
    height: 2rem;
    width: 100%;
    bottom: 0;
`;

// export const StyledCard = styled.div``;
