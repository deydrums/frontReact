import React from 'react';
import { NavLink } from 'react-router-dom';
import { images } from '../../helpers/getImages';

export const NavBar = () => {


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
                    <div className="public__nav__logo">
                        <img src={images(`./dg-logo.svg`).default} alt=""/>
                    </div>
                    <div className="public__links">
                        <NavLink to = "/"  className="navbar__links"  activeClassName = "public__links-active" onClick={handleLinkClick}>
                                Inicio 
                        </NavLink>
                        <NavLink to = "/blog"  className="navbar__links"  activeClassName = "public__links-active" onClick={handleLinkClick}>
                                Blog 
                        </NavLink>
                        <NavLink to = "/"  className="navbar__links" activeClassName = "public__links-active" onClick={handleLinkClick}>
                                Sobre nosotros 
                        </NavLink>
                        <NavLink to = "/auth"  className="navbar__links" activeClassName = "public__links-active" onClick={handleLinkClick}>
                                Entrar 
                        </NavLink>
                    </div>
                    <div className="hamburguer navbar__links" onClick ={onClickButton}>
                        <i className="fas fa-bars"></i>
                    </div>

                </section>
            </nav>
        </div>
    )
}
