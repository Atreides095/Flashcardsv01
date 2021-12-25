import React from 'react';
import {
    StyledCard,
    DeckDetails,
    StyledMidbar,
    CardLayout,
} from './DeckPreview.styled';
import { decks } from '../../data/decks';

const DeckPreview = () => {
    const sampleDeck = decks[0];
    return (
        <StyledCard>
            <CardLayout>
                <h1>{sampleDeck.name}</h1>
                <DeckDetails>
                    <p>{sampleDeck.cards.length} Cards</p>
                    <p>{sampleDeck.tags.map((tag) => `#${tag} `)}</p>
                </DeckDetails>
            </CardLayout>

            <StyledMidbar />
        </StyledCard>
    );
};

export default DeckPreview;
