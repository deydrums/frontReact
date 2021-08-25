import React from 'react';
import { images } from '../../helpers/getImages';
import { HashLink } from 'react-router-hash-link';

export const FooterScreen = ({pathname}) => {
    return (
        <footer className="principal__footer">
            <div className="principal__footer__section"><img src={images(`./dg-logo.svg`).default} alt=""/></div>
            <div className="principal__footer__section">
                <h4>deydrums.com</h4>
                <HashLink replace={"/" === pathname} to = "/#sobre-mi"  className="navbar__links">
                    Sobre Mí 
                </HashLink>
                <HashLink replace={"/" === pathname} to = "/#portafolio"  className="navbar__links">
                    Portafolio
                </HashLink>
                <HashLink replace={"/" === pathname} to = "/#habilidades"  className="navbar__links">
                    Habilidades
                </HashLink>
            </div>
            <div className="principal__footer__section">
                <h4>Contacto</h4>
                <a href="https://api.whatsapp.com/send?phone=50235125986">WhatsApp</a>
                <a href="mailto: dagarcia100@gmail.com">Email</a>
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
