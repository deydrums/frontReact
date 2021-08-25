import React from 'react';
import { NavLink } from 'react-router-dom';
import { images } from '../../helpers/getImages';
import { HashLink } from 'react-router-hash-link';

export const NavBar = ({pathname}) => {

    const scrollNavBar = () => {

        let ubicacionPrincipal = window.pageYOffset;

        window.addEventListener("scroll",function(){
            let desplazamientoActual = window.pageYOffset;
            const navbar = document.getElementById("public_nav");
            const menu = document.querySelector('.showMenu');
            if((ubicacionPrincipal>=desplazamientoActual && navbar) || menu){
                navbar.style.top = '0px';
            }else if(navbar){
                navbar.style.top = "-100px";
            }
            ubicacionPrincipal = desplazamientoActual;
        });
    }

    scrollNavBar();
    


    let semaforo = true;
    const onClickButton = () => {
        const enlacesHeader = document.querySelector('.public__links');
        const hamburguer =  document.querySelectorAll(".hamburguer")[0];
        if(semaforo && hamburguer){
            hamburguer.style.color = "#fff";
            semaforo = false;
        }else if (!semaforo && hamburguer){
            hamburguer.style.color = "#000";
            semaforo = true;
        }
        enlacesHeader.classList.toggle("showMenu");
    }

    const handleLinkClick = () => {
        const enlacesHeader = document.querySelector('.public__links');
        enlacesHeader.classList.remove("showMenu");
    }

    return (
        <div className="public__navbar">
            <nav id="public_nav">
            <section className="public__container public__nav">
                    <NavLink className="public__nav__logo" replace={"/" === pathname} to = "/">
                        <img src={images(`./dg-logo.svg`).default} alt=""/>
                    </NavLink>
                    <div className="public__links">
                        <HashLink replace={"/" === pathname} to = "/#inicio"  className="navbar__links" onClick={handleLinkClick}>
                                Inicio 
                        </HashLink>
                        <HashLink replace={"/" === pathname} to = "/#sobre-mi"  className="navbar__links" onClick={handleLinkClick}>
                                Sobre Mí 
                        </HashLink>
                        <HashLink replace={"/" === pathname} to = "/#portafolio"  className="navbar__links" onClick={handleLinkClick}>
                                Portafolio
                        </HashLink>
                        <NavLink  replace={"/blog" === pathname} to = "/blog"  className="navbar__links" onClick={handleLinkClick}>
                                Blog 
                        </NavLink>
                        <HashLink replace={"/" === pathname} to = "/#contacto"  className="navbar__links" onClick={handleLinkClick}>
                                Contacto
                        </HashLink>
                    </div>
                    <div className="hamburguer navbar__links" onClick ={onClickButton}>
                        <i className="fas fa-bars"></i>
                    </div>

                </section>
            </nav>
        </div>
    )
}
