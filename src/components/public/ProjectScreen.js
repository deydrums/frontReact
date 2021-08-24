import React from 'react';
import { useDispatch } from 'react-redux';
import { setActiveProject } from '../../actions/portafolio';
import { openModal } from '../../actions/ui';
import { images } from '../../helpers/getImages';
import { PublicProjectModal } from './PublicProjectModal';

const baseUrl = process.env.REACT_APP_API_URL;


export const ProjectScreen = (project) => {
    const dispatch = useDispatch();

    const handleProjectClick = () => {
        dispatch(setActiveProject(project));
        dispatch(openModal());
    }
    return (

        <div className="public__portafolio-project " data-aos="zoom-in">
            <div className="public__portafolio-img">
                {
                    project.image
                    ?
                    <img src={`${baseUrl}/portafolio/get-image/${project.image.replace('.','/')}`} alt="project"></img>
                    :
                    <img src={images(`./code.png`).default} alt="portafolio item thumb"/>
                }
            </div>
            <h3 className="portafolio-item-title">{project.name}</h3>
            <button type="button" className="btn btn-public btn-public-dark" onClick = {handleProjectClick}>Ver proyecto</button>
        <PublicProjectModal/>
        </div>

    )
}
