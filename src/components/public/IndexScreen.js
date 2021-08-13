import React, { useEffect } from 'react';
import { Header } from './Header';
import AOS from 'aos';
import "aos/dist/aos.css";
import { AboutUs } from './AboutUs';
import { Footer } from './Footer';

export const IndexScreen = () => {


    useEffect(() => {
        AOS.init({
          duration : 1000
        });
      }, []);

    return (
        <>
            <Header/>
            <AboutUs/>
            <Footer/>
        </>
        
    )
}
