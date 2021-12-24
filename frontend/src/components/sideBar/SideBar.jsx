import React, { useState } from 'react';
import {
    StyledSideBar,
    ExpandBtn,
    Icon,
    Profile,
    ProfilePicture,
    BarBtn,
    Collection,
    CollectionItems,
    Item,
    Footer,
    Wrapper,
} from './SideBar.styled';
import {
    faArrowAltCircleLeft,
    faAngleDoubleDown,
    faAngleDoubleUp,
} from '@fortawesome/free-solid-svg-icons';
import { faGithubAlt } from '@fortawesome/free-brands-svg-icons';
import profilePicture from '../../assets/img/user.png';

const SideBar = () => {
    const [expanded, setExpanded] = useState(true);
    const [collectionExpanded, setCollectionExpanded] = useState(false);

    return (
        <StyledSideBar expanded={expanded}>
            <Wrapper expanded={expanded}>
                <Profile>
                    <ProfilePicture src={profilePicture} alt="" />
                    <h3>Atreides095</h3>
                    <BarBtn>Log Out</BarBtn>
                    <BarBtn>Home Screen</BarBtn>
                </Profile>
                <Collection>
                    <BarBtn
                        onClick={() =>
                            setCollectionExpanded(!collectionExpanded)
                        }
                    >
                        <Icon
                            icon={
                                collectionExpanded
                                    ? faAngleDoubleDown
                                    : faAngleDoubleUp
                            }
                        />
                        {' Collection'}
                    </BarBtn>
                    <CollectionItems expanded={collectionExpanded}>
                        <Item to="#">Deck01</Item>
                        <Item to="#">Deck02</Item>
                        <Item to="#">Deck03</Item>
                        <Item to="#">Deck04</Item>
                        <Item to="#">Deck05</Item>
                        <Item to="#">Deck06</Item>
                        <Item to="#">Deck07</Item>
                    </CollectionItems>
                </Collection>
                <Footer href="/">
                    <Icon icon={faGithubAlt} />
                    &nbsp;&nbsp;Github Repo
                </Footer>
            </Wrapper>
            <ExpandBtn
                expanded={expanded}
                onClick={(e) => setExpanded(!expanded)}
            >
                <Icon
                    color={'var(--black)'}
                    size="2x"
                    icon={faArrowAltCircleLeft}
                />
            </ExpandBtn>
        </StyledSideBar>
    );
};

export default SideBar;
