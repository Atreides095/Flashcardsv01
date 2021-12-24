import styled from 'styled-components';

export const StyledBackground = styled.div`
    background-color: var(--grey-light);
    height: 100vh;
    display: grid;
    place-content: center;
`;

export const StyledAccountBox = styled.div`
    position: relative;
    background: var(--grad);
    height: min(70vh, 600px);
    width: max(60vw, 300px);
    max-width: 1000px;
    /* width: 800px; */
    /* min-width: 500px; */
    border-radius: 12px;
    padding-block: 2rem;
    padding-inline-start: 2rem;
    display: flex;
    @media (max-width: 1030px) {
        padding-inline: 2rem;
    }
`;

export const AccountBoxImg = styled.div`
    height: 100%;
    width: 50%;
    background-color: var(--grey-dark);

    @media (max-width: 1030px) {
        display: none;
    }
`;

export const FormSwitch = styled.p`
    position: absolute;
    color: var(--pink);
    right: 2rem;
    bottom: 2rem;
    font-size: 0.7rem;
    cursor: pointer;
    text-decoration: underline;
`;
