import React from 'react';
import { Link } from 'react-router-dom';

export const NavBar = () => {
    return (
        <div className="public__navbar">
            <nav>
            <section class="public__container public__nav">
                    <div class="public__nav__logo">
                        <img src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c521.png" alt=""/>
                    </div>
                    <div class="public__links">
                        <Link to = "/" replace className="navbar__links" >
                                Inicio 
                        </Link>
                        <Link to = "/" replace className="navbar__links" >
                                Blog 
                        </Link>
                        <Link to = "/" replace className="navbar__links">
                                Sobre nosotros 
                        </Link>
                        <Link to = "/" replace className="navbar__links">
                                Portafolio 
                        </Link>
                        <Link to = "/" replace className="navbar__links">
                                Contacto 
                        </Link>
                    </div>
                    <div class="hamburguer">
                        <i class="fas fa-bars"></i>
                    </div>
                </section>
            </nav>
        </div>
    )
}
