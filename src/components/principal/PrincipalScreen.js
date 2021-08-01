import React from 'react'
import { Sidebar } from './Sidebar';
import {IndexScreen} from './NothingScreen';

export const PrincipalScreen = () => {



    return (
        <div className = "principal__main-content animate__animated animate__fadeIn" >
            <Sidebar/>
            <IndexScreen />
        </div>
    )
}
