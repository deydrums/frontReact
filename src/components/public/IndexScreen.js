import React from 'react';
import { HeaderScreen } from './HeaderScreen';
import { AboutMeScreen } from './AboutMeScreen';
import { HabilitiesScreen } from './HabilitiesScreen';
import { ContactScreen } from './ContactScreen';
import { PortafolioScreen } from './PortafolioScreen';

export const IndexScreen = () => {

    return (
        <>
            <HeaderScreen/>
            <AboutMeScreen/>
            <HabilitiesScreen/>
            <PortafolioScreen/>
            <ContactScreen/>
        </>
        
    )
}
