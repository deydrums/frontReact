import React from 'react';
import { HeaderScreen } from './HeaderScreen';
import { AboutMeScreen } from './AboutMeScreen';
import { HabilitiesScreen } from './HabilitiesScreen';
import { ContactScreen } from './ContactScreen';

export const IndexScreen = () => {

    return (
        <>
            <HeaderScreen/>
            <AboutMeScreen/>
            <HabilitiesScreen/>
            <ContactScreen/>
        </>
        
    )
}
