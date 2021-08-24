import React from 'react'
import { useSelector } from 'react-redux'
const baseUrl = process.env.REACT_APP_API_URL;

export const ProjectDetailScreen = () => {

    const {activeProject} = useSelector(state => state.portafolio);

    return (
        
        <>
        {
            activeProject&&
                <div className="public_portafolio-item scroll_options">
                        {activeProject.image &&
                        <div className="public_portafolio-item-img">
                             <img src={`${baseUrl}/portafolio/get-image/${activeProject.image.replace('.','/')}`} alt="project"></img>
                        </div>     
                        }

                        
                        <div className="public__portafolio-item-details">
                            <h3>{activeProject.name}</h3>
                            <div className="description">
                                <p>{activeProject.desc}</p>
                            </div>
                            <div className="general-info">
                                <ul>
                                    <li><span>Creado</span> - {activeProject.date}</li>
                                    <li><span>Tecnologias usadas</span> - {activeProject.technologies}</li>
                                    <li><span>Roll</span> - {activeProject.role}</li>
                                    <li><span>Responsive</span> - {activeProject.responsive}</li>
                                    <li><a href={activeProject.link} target="_blank" rel="noreferrer" className="btn btn-public btn-public-dark btn-right mb-5">Ir al sitio</a></li>
                                </ul>
                            </div>
                        </div>
                </div>
        }

        </>
    )
}
