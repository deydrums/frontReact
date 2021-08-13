import React from 'react';
import { NavLink } from 'react-router-dom';
import { images } from '../../helpers/getImages';

export const NavBar = () => {

    let ubicacionPrincipal = window.pageYOffset;

    window.addEventListener("scroll",function(){
        let desplazamientoActual = window.pageYOffset;
        if(ubicacionPrincipal>=desplazamientoActual){
            document.getElementById("public_nav").style.top = '0px';
        }else{
            document.getElementById("public_nav").style.top = "-100px";
        }
        ubicacionPrincipal = desplazamientoActual;
    });

    //Menu
    let semaforo = true;
    const onClickButton = () => {
        let enlacesHeader = document.querySelector('.public__links');
        
        if(semaforo){
            document.querySelectorAll(".hamburguer")[0].style.color = "#fff";
            semaforo = false;
        }else{
            document.querySelectorAll(".hamburguer")[0].style.color = "#000";
            semaforo = true;
        }
        enlacesHeader.classList.toggle("showMenu");
    }



    return (
        <div className="public__navbar">
            <nav id="public_nav">
            <section className="public__container public__nav">
                    <div className="public__nav__logo">
                        <img src={images(`./dg-logo.svg`).default} alt=""/>
                    </div>
                    <div className="public__links">
                        <NavLink to = "/"  className="navbar__links"  activeClassName = "public__links-active" >
                                Inicio 
                        </NavLink>
                        <NavLink to = "/"  className="navbar__links"  activeClassName = "public__links-active" >
                                Blog 
                        </NavLink>
                        <NavLink to = "/"  className="navbar__links" activeClassName = "public__links-active" >
                                Sobre nosotros 
                        </NavLink>
                        <NavLink to = "/"  className="navbar__links" activeClassName = "public__links-active" >
                                Portafolio 
                        </NavLink>
                        <NavLink to = "/auth"  className="navbar__links" activeClassName = "public__links-active" >
                                Entrar 
                        </NavLink>
                    </div>
                    <div className="hamburguer" onClick ={onClickButton}>
                        <i className="fas fa-bars"></i>
                    </div>
                </section>
            </nav>
        </div>
    )
}
