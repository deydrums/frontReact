import React from 'react';
import { images } from '../../helpers/getImages';
export const FooterScreen = () => {
    
    return (
        <footer className="principal__footer">
            <div className="principal__footer__section"><img src={images(`./dg-logo.svg`).default} alt=""/></div>
            <div className="principal__footer__section">
                <h4>Servicios</h4>
                <a href="https://www.google.com">Services 1</a>
                <a href="https://www.google.co">Services 2</a>
                <a href="https://www.google.co">Services 3</a>
            </div>
            <div className="principal__footer__section">
                <h4>Acerca de</h4>
                <a href="https://www.google.co">About 1</a>
                <a href="https://www.google.co">About 2</a>
                <a href="https://www.google.co">About 3</a>
            </div>
            <div className="principal__footer__section">
                <h4>Redes sociales</h4>
                <div className="principal__social-media">
                    <a 
                        className="social-media-icon"
                        href = "https://www.facebook.com/deydrums/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <i className="fab fa-facebook-f"></i>
                    </a>
                    <a 
                        className="social-media-icon"
                        href = "https://www.instagram.com/dey_drums"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <i className="fab fa-instagram"></i>
                    </a>
                    <a 
                        className="social-media-icon"
                        href = "https://twitter.com/dey_drums"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a 
                        className="social-media-icon"
                        href = "https://www.linkedin.com/in/davgar100/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a 
                        className="social-media-icon"
                        href = "https://www.youtube.com/channel/UCGtKLMoZsUQeMqAOqlSzang"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <i className="fab fa-youtube"></i>
                    </a>
                </div>
            </div>
        </footer>
    )
}
