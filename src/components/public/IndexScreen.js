import React from 'react';
import { HeaderScreen } from './HeaderScreen';
import { AboutMeScreen } from './AboutMeScreen';
import { HabilitiesScreen } from './HabilitiesScreen';
import { ContactScreen } from './ContactScreen';
import { PortafolioScreen } from './PortafolioScreen';

export const IndexScreen = ({location}) => {

    const {pathname} = location;
    return (
        <>
            <HeaderScreen pathname={pathname}/>
            <AboutMeScreen pathname={pathname}/>
            <HabilitiesScreen/>
            <PortafolioScreen/>
            <ContactScreen/>
        </>
        
    )
}
