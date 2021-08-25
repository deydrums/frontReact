import React from 'react';
import { images } from '../../helpers/getImages';
import { HashLink } from 'react-router-hash-link';

export const HeaderScreen = ({pathname}) => {
    return (
        <header id = 'inicio'>
            <div className="public__container">
                <section className="public__contenido-header">
                    <div className="public__header-text">
                        <p>Hola, soy</p>
                        <h1>David García</h1>
                        <h2>Estudiante de Ingenieria Electrónica<br/>& desarrollador web</h2>
                        <HashLink replace={"/" === pathname} to = "/#sobre-mi" className="btn-public m-2">Sobre mí</HashLink>
                        <HashLink replace={"/" === pathname} to = "/#portafolio" className="btn-public m-2">Portafolio</HashLink>
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
