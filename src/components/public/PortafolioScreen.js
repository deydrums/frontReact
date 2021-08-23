import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startGetProjects } from '../../actions/portafolio';
import { ProjectScreen } from './ProjectScreen'


export const PortafolioScreen = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(startGetProjects());
    }, [dispatch])

    const {projects} = useSelector(state => state.portafolio);

    return (
        <section className="public__portafolio" id="portafolio">
            <div className="public__portafolio-container">

                <div className="public__portafolio-title">
                    <h2>Portafolio</h2>
                </div>

                <div className="public__portafolio-content">
                    {
                        projects.map(project => (
                            <ProjectScreen 
                                key={project.id}
                                {...project}
                            />
                        ))
                    }
                </div>
            </div>
        </section>
    )
}
