import React from 'react';
import Collection from '../../components/collection';
import DeckPreview from '../../components/deckPreview';
import { MainLayout } from './HomeView.styled';

const HomeView = () => {
    return (
        <MainLayout>
            <DeckPreview />
            <Collection />
        </MainLayout>
    );
};

export default HomeView;
