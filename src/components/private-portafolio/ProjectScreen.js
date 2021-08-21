import React from 'react'
import { useDispatch } from 'react-redux';
import { openModal } from '../../actions/ui';

export const ProjectScreen = (project) => {

    const dispatch = useDispatch();
    
    const handleEditProject = () => {
        dispatch(openModal());
    }


    return (
        <div className="portafolio__content-project animate__animated animate__zoomIn"> 
            <div className="portafolio__content__color">
                <i className="fas fa-neuter"/>
            </div>
            <div className="portafolio__content-project-data">
                <div className="portafolio__content-project-data-txt">
                    {project.name}
                </div>
            </div>
            <div className="portafolio__content-date">
                <div className="blog__content_catop pointer" onClick={handleEditProject}><i className="fas fa-edit"></i></div>
                <div className="blog__content_catop pointer" ><i className="fas fa-trash-alt"></i></div>
            </div>
        </div>
    )
}
