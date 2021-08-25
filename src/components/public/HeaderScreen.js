import React from 'react';
import { images } from '../../helpers/getImages';

export const HeaderScreen = () => {
    return (
        <header id = 'inicio'>
            <div className="public__container">
                <section className="public__contenido-header">
                    <div className="public__header-text">
                        <p>Hola, soy</p>
                        <h1>David García</h1>
                        <h2>Estudiante de Ingenieria Electrónica<br/>& desarrollador web</h2>
                        <a href="#about" className="btn-public m-2">Sobre mí</a>
                        <a href="#portafolio" className="btn-public m-2">Portafolio</a>
                    </div>
                    <div className="public__header-img animate__animated animate__fadeIn">
                        <div className="img-box">
                            <img src={images(`./profile-img.png`).default} alt="profile-img"/>
                        </div>
                    </div>
                </section>
            </div>
        </header>
    )
}
