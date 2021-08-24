import React from 'react'
import { images } from '../../helpers/getImages'

export const ProjectDetailScreen = () => {
    return (
            <div className="public_portafolio-item scroll_options">
                    <div className="public_portafolio-item-img">
                        <img src={`${images(`./code.png`).default}`} alt="portafolio item thumb"/>
                    </div>
                    
                    <div className="public__portafolio-item-details">
                        <h3>JournalApp</h3>
                        <div className="description">
                            <p>JournalApp es una aplicación que permite al usuario crear notas de actividades diarias, el proyecto está realizado con react, empleando registro de usuarios, autenticación de Google y por correo electrónico, se utilizó Redux para realizar el proyecto, para el almacenamiento de datos se utilizó Cloud Firestore de Firebase.</p>
                        </div>
                        <div className="general-info">
                            <ul>
                                <li><span>Creado</span> - 26 julio, 2021 </li>
                                <li><span>Tecnologias usadas</span> - Html, Css, Sass, JavaScript, React</li>
                                <li><span>Roll</span> - Frontend</li>
                                <li><span>Responsive</span> - Si</li>
                                <li><a href="https://deydrums.com/proyectos/journal-app/" target="_blank" className="btn btn-public btn-public-dark btn-right mb-5">Ir al sitio</a></li>
                            </ul>
                        </div>
                    </div>
            </div>
    )
}
