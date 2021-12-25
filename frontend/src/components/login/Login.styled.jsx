import styled from 'styled-components';

export const FormBox = styled.div`
    margin-inline: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1.7rem;
    margin-block: auto;
`;

export const StyledTitle = styled.h2`
    color: var(--pink);
`;

export const StyledField = styled.div`
    position: relative;
    width: 13rem;

    & > input {
        border: 1px solid var(--green-light);
        background-color: #f8f8f815;
        height: 1.7rem;
        width: 100%;
        border-radius: 2px;
        padding-inline: 0.5rem;
        outline: none;
        color: var(--grey-light);
    }

    & > label {
        position: absolute;
        color: var(--green-light);
        font-size: 0.7rem;
        left: 1rem;
        top: ${({ active }) => (active ? '-30%' : '50%')};
        /* top: 50%; */
        transform: translateY(-50%);
        pointer-events: none;
        transition: top 0.5s 0s ease;
    }
`;
