import React from 'react';
import { AboutUsScreen } from './AboutUsScreen';
import { ContactScreen } from './ContactScreen';
import { HeaderScreen } from './HeaderScreen';

export const IndexScreen = () => {

    return (
        <>
            <HeaderScreen/>
            <AboutUsScreen/>
            <ContactScreen/>
        </>
        
    )
}
