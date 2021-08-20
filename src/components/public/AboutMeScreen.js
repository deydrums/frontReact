import React from 'react'
import { images } from '../../helpers/getImages';

export const AboutMeScreen = () => {

    
    // const tabsContainer =document.querySelector(".about-tabs"),
    // aboutSection = document.querySelector(".about-section");

    // tabsContainer.addEventListener("click",(e)=>{
    //     if(e.target.classList.contains("tab-item") && !e.target.classList.contains("active")){
    //         tabsContainer.querySelector(".active").classList.remove("active");
    //         e.target.classList.add("active");
    //         const target = e.target.getAttribute("data-target");
    //         aboutSection.querySelector(".tab-content.active").classList.remove("active");
    //         aboutSection.querySelector(target).classList.add("active");
    //     }
    // });

    const handleTabsClick = (e) => {
        const tabsContainer = document.querySelector(".public__about-tabs")
        const aboutSection = document.querySelector(".public__about");
        
        if(e.target.classList.contains("tab-item") && !e.target.classList.contains("active")){
            tabsContainer.querySelector(".active").classList.remove("active");
            e.target.classList.add("active"); 
            const target = e.target.getAttribute("data-target");
            aboutSection.querySelector(".tab-content.active").classList.remove("active");
            aboutSection.querySelector(target).classList.add("active");
        }


    }

    return (
        <div className="public__about">
            <div className="public__about-container">
                <div className="public__about-title">
                    <h2>Sobre Mí</h2>
                </div>
                <div className="public__about-content">
                    <div className="public__about-image">
                        <img src={images(`./about-img.png`).default} alt="about img"/>
                    </div>
                    <div className="public__about-text">
                        <p> &nbsp;&nbsp;&nbsp;&nbsp; Mario David García Chinchilla, o simplemente David;
                            me considero una persona trabajadora y muy positiva con una gran
                            actitud para aprender, tengo 25 años y resido en la 
                            ciudad de Guatemala.
                            <br/><br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;Me apasiona el desarrollo WEB, he trabajado con 
                            lenguaje PHP (Nativo y Frameworks como Laravel y Symfony), JavaScript 
                            (Angular, React JS), Python, entre otros; Bases de datos
                            relacionales (MySQL, MariaDB) y no relacionales (MongoDB).
                            <br/><br/>
                            &nbsp;&nbsp;&nbsp;&nbsp; Poseo cierre de pensum de la carrera de 
                            Ingeniería Electrónica, donde adquirí conocimientos en el área de 
                            telecomunicaciones, electrónica y networking, (Trabajando con equipos
                            Cisco y Mikrotik).
                        </p>
                        <div className="public__about-tabs" onClick={handleTabsClick}>
                            <button type="button" className="tab-item active" data-target="#education">educación</button>
                            <button type="button" className="tab-item" data-target="#experience">experiencia</button>
                            <button type="button" className="tab-item" data-target="#curses">cursos</button>
                        </div>
                        
                        {/* <!--Education Start--> */}

                        <div className="tab-content active" id = "education">
                            <div className="timeline">
                                <div className="timeline-item">
                                    <span className="date">2012 - 2014</span>
                                    <h4>Bachiller industrial y perito en electrónica digital - <span>Colegio IMB-PC</span></h4>
                                    <p>Carrera en la que aprendí las bases de la electrónica digital y análoga, 
                                        desarrollando diferentes proyectos.
                                    </p>
                                </div>
                                <div className="timeline-item">
                                    <span className="date">2016 - actualmente</span>
                                    <h4>Ingenieria electrónica - <span>Universidad de San Carlos de Guatemala</span></h4>
                                    <p>Durante mi formación académica universitaria, continué ampliando los 
                                        conocimientos sobre electrónica, telecomunicaciones, networking,
                                        sistemas computacionales, aplicando dichos conocimientos para realizar
                                        diferentes proyectos de laboratorios.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* <!--Education End--> */}
                        {/* <!--Experience Start--> */}

                        <div className="tab-content" id="experience">
                            <div className="timeline">
                                <div className="timeline-item">
                                    <span className="date">2021</span>
                                    <h4>Operador NOC - <span>Infinitum S.A.</span></h4>
                                    <p>Como practica final supervisada de la universidad, estuve apoyando
                                        en la empresa Infinitum S.A. como operador del centro de redes,
                                        con la resolución de incidencias proactivas y reactivas reportadas
                                        por parte del cliente final.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* <!--Experience End--> */}
                        {/* <!--Curses Start--> */}

                    <div className="tab-content" id="curses">
                        <div className="timeline">

                            <div className="timeline-item">
                                <span className="date">Ago - 2021</span>
                                <h4>React: De cero a experto ( Hooks y MERN ) - <span>Udemy</span></h4>
                                    <p>
                                    Desarrollo en lenguaje JavaScript utilizando la libreria React JS, 100% en Hooks y functional components.
                                    </p>    
                                <a href="https://www.udemy.com/certificate/UC-75ca20b1-c3d9-485f-93c2-f9541704a34a/" target="_blank" rel="noreferrer" className= "btn-public mt-2">Ver Credencial</a>
                            </div>

                            <div className="timeline-item">
                                <span className="date">Jun - 2021</span>
                                <h4>Master en JavaScript, jQuery, Angular, NodeJS - <span>Udemy</span></h4>
                                    <p>
                                    Desarrollo en lenguaje JavaScript desde cero, partiendo de las bases de la programación, hasta 
                                    la utilización de frameworks.
                                    </p>    
                                <a href="https://www.udemy.com/certificate/UC-a48a8562-5bab-4bf0-bd82-b0f52040b226/" target="_blank" rel="noreferrer" className="btn-public mt-2">Ver Credencial</a>
                            </div>

                            <div className="timeline-item">
                                <span className="date">Jun - 2021</span>
                                <h4>Introduction to Cybersecurity - <span>Cisco</span></h4>
                                <p>
                                    Descubra el mundo de la ciberseguridad y su impacto, a medida que descubre las amenazas, 
                                    ataques y vulnerabilidades más comunes.
                                </p>
                                <a href="https://www.credly.com/badges/562657fe-240e-46a1-a924-7e37f359c073?source=linked_in_profile" target="_blank" rel="noreferrer" className="btn-public mt-2">Ver Credencial</a>
                            </div>

                            <div className="timeline-item">
                                <span className="date">Jun - 2021</span>
                                <h4> Master en webs Full Stack - <span>Udemy</span></h4>
                                <p>
                                    Desarrollo en lenguaje PHP desde cero, partiendo de las bases de la programación, hasta 
                                    la utilización de frameworks empleando POO, y MVC.
                                </p>
                                <a href="https://www.udemy.com/certificate/UC-f8b2a5a3-bc45-459b-bef1-47dbc5e0cdd3/" target="_blank" rel="noreferrer" className="btn-public mt-2">Ver Credencial</a>
                            </div>

                            <div className="timeline-item">
                                <span className="date">May - 2021</span>
                                <h4>Master en PHP, SQL, POO, MVC, Laravel, Symfony - <span>Udemy</span></h4>
                                <p>
                                    Desarrollo en lenguaje PHP desde cero, partiendo de las bases de la programación, hasta 
                                    la utilización de frameworks empleando POO, y MVC.
                                </p>
                                <a href="https://www.udemy.com/certificate/UC-e80059cc-1857-4d6a-9d9b-e50773c940d1" target="_blank" rel="noreferrer" className="btn-public mt-2">Ver Credencial</a>
                            </div>

                        </div>
                    </div>
                    {/* <!--Curses End--> */}


                    </div>
                </div>
            </div>
        </div>
                
    )
}
