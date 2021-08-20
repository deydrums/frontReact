import React from 'react'
import { images } from '../../helpers/getImages';

export const AboutMeScreen = () => {
    return (
        <div className="public__about">
            <div className="public__about-container">
                <div className="public__about-image">
                    <img src={images(`./about-img.png`).default} alt="about img"/>
                </div>
                <div className="public__about-content">

                </div>  

{/* 
    <section class="about-section sec-padding" id="about">
        <div class="container">

            <div class="row">
                <div class="section-title">
                    <h2>Sobre mí</h2>
                </div>
            </div>

            <div class="row">
                <div class="about-img">
                    <div class="img-box">
                        <img src={images(`./about-img.png`).default} alt="about img"/>
                    </div>
                </div>
                <div class="about-text">
                    <p> &nbsp;&nbsp;&nbsp;&nbsp; Mario David García Chinchilla, o simplemente David;
                        me considero una persona trabajadora y muy positiva con una gran
                        actitud para aprender cosas nuevas, tengo 24 años y resido en la 
                        ciudad de Guatemala.
                        <br/><br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;Me apasiona el desarrollo WEB, he trabajado con 
                        lenguaje PHP (Nativo y Frameworks como Laravel y Symfony), JavaScript 
                        (Nativo y Frameworks como Angular), Python, entre otros; Bases de datos
                        relacionales (MySQL, MariaDB).
                        <br/><br/>
                        &nbsp;&nbsp;&nbsp;&nbsp; Poseo cierre de pensum de la carrera de 
                        Ingeniería Electrónica, donde adquirí conocimientos en el área de 
                        telecomunicaciones, electrónica y networking, (Trabajando con equipos
                         Cisco y Mikrotik).
                    </p>


                    <h3>Habilidades</h3>
                    <div class="skills">
                        <div class="skill-item">html</div>
                        <div class="skill-item">css</div>
                        <div class="skill-item">javascript</div>
                        <div class="skill-item">angular</div>
                        <div class="skill-item">php</div>
                        <div class="skill-item">laravel</div>
                        <div class="skill-item">symfony</div>
                        <div class="skill-item">wordpress</div>
                        <div class="skill-item">python</div>
                        <div class="skill-item">mysql</div>
                        <div class="skill-item">react</div>
                    </div>
                    <div class="about-tabs">
                        <button type="button" class="tab-item active" data-target="#education">educación</button>
                        <button type="button" class="tab-item" data-target="#experience">experiencia</button>
                        <button type="button" class="tab-item" data-target="#curses">cursos</button>
                   
                    </div>

                    <div class="tab-content active" id = "education">
                        <div class="timeline">
                            <div class="timeline-item">
                                <span class="date">2012 - 2014</span>
                                <h4>Bachiller industrial y perito en electrónica digital - <span>Colegio IMB-PC</span></h4>
                                <p>Carrera en la que aprendí las bases de la electrónica digital y análoga, 
                                    desarrollando diferentes proyectos.
                                </p>
                            </div>
                            <div class="timeline-item">
                                <span class="date">2016 - actualmente</span>
                                <h4>Ingenieria electrónica - <span>Universidad de San Carlos de Guatemala</span></h4>
                                <p>Durante mi formación académica universitaria, continué ampliando los 
                                    conocimientos sobre electrónica, telecomunicaciones, networking,
                                     sistemas computacionales, aplicando dichos conocimientos para realizar
                                      diferentes proyectos de laboratorios.
                                </p>
                            </div>
                        </div>

                    </div>


                    <div class="tab-content" id="experience">
                        <div class="timeline">
                            <div class="timeline-item">
                                <span class="date">2021</span>
                                <h4>Operador NOC - <span>Infinitum S.A.</span></h4>
                                <p>Como practica final supervisada de la universidad, estuve apoyando
                                     en la empresa Infinitum S.A. como operador del centro de redes,
                                      con la resolución de incidencias proactivas y reactivas reportadas
                                       por parte del cliente final.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="tab-content" id="curses">
                        <div class="timeline">
                            <div class="timeline-item">
                                <span class="date">2021</span>
                                <h4>Master en JavaScript, jQuery, Angular, NodeJS - <span>Udemy</span></h4>
                                <p>
                                    Desarrollo en lenguaje JavaScript desde cero, partiendo de las bases de la programación, hasta 
                                    la utilización de frameworks.
                                </p>
                                <a href="#" target="_blank" class="btn">Ver Credencial</a>
                            </div>
                        </div>
                    </div>

                    <a href="cv.pdf" target="_blank" class="btn">Descargar CV</a>
                    <a href="#contact" class="btn link-item">Contáctame</a>

                </div>
            </div>
        </div>

    </section> */}



            </div>
        </div>
    )
}
