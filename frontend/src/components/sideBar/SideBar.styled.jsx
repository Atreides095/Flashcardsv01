import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';

export const StyledSideBar = styled.div`
    background: ${({ expanded }) =>
        expanded ? 'var(--grad)' : 'var(--black)'};
    position: relative;
    display: flex;
    flex-direction: column;
    width: ${({ expanded }) => (expanded ? '15rem' : '3rem')};
    height: 100vh;
    padding-inline: 1rem;
    padding-block: 2rem;
    border-right: 0.2rem solid var(--black);
    transition: width 0.5s ease-out, background 0.5s ease-out;
    z-index: 999;
`;

export const Wrapper = styled.div`
    /* display: ${({ expanded }) => (expanded ? 'flex' : 'none')}; */
    opacity: ${({ expanded }) => (expanded ? 1 : 0)};
    flex-direction: column;
    transition: opacity 0.3s ease-out;
`;

export const ExpandBtn = styled.div`
    position: absolute;
    height: fit-content;
    width: fit-content;
    display: grid;
    padding: 0.1rem;
    place-content: center;
    top: 1.5rem;
    right: 0;
    transform: translateX(50%)
        ${({ expanded }) => (expanded ? '' : 'rotate(180deg)')};
    background-color: var(--white);
    border-radius: 50%;
    transition: transform 0.5s ease-out;
    cursor: pointer;

    &:hover > * {
        color: var(--grey-dark);
    }
`;

export const Icon = styled(FontAwesomeIcon)`
    transition: color 0.3s ease-out;
`;

export const BarBtn = styled.button`
    width: 100%;
    height: 1.7rem;
    background-color: var(--grey-dark);
    border: none;
    font-size: 1rem;
    color: var(--green-light);
    transition: color 0.3s ease-out, background-color 0.3s ease-out;
    border-radius: 4px;

    &:hover {
        background-color: var(--green-light);
        color: var(--black);
    }
`;

// Profile Area //

export const Profile = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
    align-items: center;
    overflow: hidden;
    margin-bottom: 3rem;

    h3 {
        font-size: 1.2rem;
        color: var(--pink);
    }
`;

export const ProfilePicture = styled.img`
    height: 4.5rem;
    width: 4.5rem;
    border-radius: 50%;
`;

// Collection Area //

export const Collection = styled.div`
    width: 100%;
    height: fit-content;
    /* background-color: red; */
`;

export const CollectionItems = styled.div`
    /* padding-block: 1rem; */
    margin-block: 1rem;
    overdlow: hidden;
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
    height: auto;
    max-height: ${({ expanded }) => (expanded ? '10rem' : 0)};
    /* max-height: 10rem; */
    overflow-y: auto;
    transition: max-height 0.3s ease-out;

    /* width */
    ::-webkit-scrollbar {
        width: 5px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
        background: var(--black);
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
        background: var(--green-light);
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
        background: var(--pink);
    }
`;

export const Item = styled(NavLink)`
    width: 100%;
    height: 1.5rem;
    text-align: center;
    color: var(--grey-light);
    text-decoration: none;
    transition: background-color 0.2s ease-in;

    &:hover {
        background-color: var(--grey-dark);
    }
`;

export const Footer = styled.a`
    background-color: var(--black);
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2rem;
    color: var(--green-light);
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
`;
