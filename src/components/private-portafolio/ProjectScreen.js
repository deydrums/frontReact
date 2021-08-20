import React from 'react'

export const ProjectScreen = () => {
    return (
        <div className="portafolio__content-project animate__animated animate__zoomIn"> 
            <div className="portafolio__content__color">
                <i className="fas fa-neuter"/>
            </div>
            <div className="portafolio__content-project-data">
                <div className="portafolio__content-project-data-txt">
                    Nombre
                </div>
            </div>
            <div className="portafolio__content-date">
                <div className="blog__content_catop pointer" ><i className="fas fa-edit"></i></div>
                <div className="blog__content_catop pointer" ><i className="fas fa-trash-alt"></i></div>
            </div>
        </div>
    )
}
