import React from 'react'
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2';
import { setActiveProject, startDeleteProject } from '../../actions/portafolio';
import { openModal } from '../../actions/ui';

export const ProjectScreen = (project) => {

    const dispatch = useDispatch();

    const handleEditProject = () => {
        dispatch(setActiveProject(project));
        dispatch(openModal());
    }

    const handleDeleteProject = () => {
        Swal.fire({
            title: '¿Quieres eliminar este proyecto?',
            text: "Se eliminará el proyecto permanentemente.",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Eliminar'
          }).then((result) => {
            if (result.isConfirmed) {
              dispatch(startDeleteProject(project.id));
            }
          })
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
                <div className="blog__content_catop pointer" onClick={handleDeleteProject}><i className="fas fa-trash-alt"></i></div>
            </div>
        </div>
    )
}
