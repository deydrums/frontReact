import React from 'react'
import { ProjectScreen } from './ProjectScreen'

export const PortafolioScreen = () => {
    return (
        <section className="public__portafolio" id="portafolio">
            <div className="public__portafolio-container">

                <div className="public__portafolio-title">
                    <h2>Portafolio</h2>
                </div>

                <div className="public__portafolio-content">
                    <ProjectScreen/>
                    <ProjectScreen/>
                    <ProjectScreen/>
                    <ProjectScreen/>
                    <ProjectScreen/>
                </div>
            </div>
        </section>
    )
}
