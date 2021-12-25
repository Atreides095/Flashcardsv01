import React, { useState } from 'react';
import { StyledCollectionArea, DeckItem, CardItem } from './Collection.styled';
import ListBox from './ListBox';
import { decks } from '../../data/decks';

const Collection = () => {
    const [activeDeck, setActiveDeck] = useState('');

    return (
        <StyledCollectionArea>
            <ListBox dark title="My Decks">
                {decks.map((deck) => (
                    <DeckItem
                        dark
                        active={activeDeck === deck ? true : false}
                        key={deck._id}
                        onClick={() => {
                            setActiveDeck(deck);
                        }}
                    >
                        {deck.name}
                    </DeckItem>
                ))}
            </ListBox>
            <ListBox title="Cards in this Deck">
                {activeDeck &&
                    activeDeck.cards.map((card) => (
                        <CardItem key={card._id}>
                            <p>{card.front}</p>
                            <p>{card.back}</p>
                        </CardItem>
                    ))}
            </ListBox>
        </StyledCollectionArea>
    );
};

export default Collection;
