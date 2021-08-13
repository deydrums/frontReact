import React from 'react';
import { Link } from 'react-router-dom';

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
                        <img src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c521.png" alt=""/>
                    </div>
                    <div className="public__links">
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
                        <Link to = "/auth" replace className="navbar__links">
                                Entrar 
                        </Link>
                    </div>
                    <div className="hamburguer" onClick ={onClickButton}>
                        <i className="fas fa-bars"></i>
                    </div>
                </section>
            </nav>
        </div>
    )
}
