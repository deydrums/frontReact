import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startGetProjects } from '../../actions/portafolio'
import { LoadingIconScreen } from '../ui/LoadingIconScreen'
import { ProjectScreen } from './ProjectScreen'


export const PortafolioScreen = () => {

    const dispatch = useDispatch();
    const {projects} = useSelector(state => state.portafolio)

    useEffect(() => {
        dispatch(startGetProjects());
    }, [dispatch])

    console.log(projects)
    return (
        <div className="principal__content">
            <div className="portafolio__content ">
                <div className="portafolio__container-entries">
                    <div className="portafolio__options-entries">
                        <h5 className="principal__title_secundary"><i className="fas fa-hard-hat m-2"></i> Proyectos</h5>
                        <button className="btn btn-primary h-100">
                            <span>Nuevo</span>
                        </button>
                    </div>
                    <div className="portafolio__projects scroll_options ">
                        <div className="portafolio__projects-center">
    
                            {/* <div className="mt-3">
                                <LoadingIconScreen/>
                            </div> */}
                        <ProjectScreen/>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
