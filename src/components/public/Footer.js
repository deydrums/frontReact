import React from 'react';
import { images } from '../../helpers/getImages';

export const Footer = () => {
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
                    <div className="social-media-icon">
                        <i className="fab fa-facebook-f"></i>
                    </div>
                    <div className="social-media-icon">
                        <i className="fab fa-instagram"></i>
                    </div>
                    <div className="social-media-icon">
                        <i className="fab fa-twitter"></i>
                    </div>
                    <div className="social-media-icon">
                        <i className="fab fa-linkedin-in"></i>
                    </div>
                    <div className="social-media-icon">
                        <i className="fab fa-youtube"></i>
                    </div>
                </div>
            </div>
        </footer>
    )
}
