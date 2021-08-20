import React from 'react';
import { images } from '../../helpers/getImages';

export const ProjectScreen = () => {
    return (

        <div className="public__portafolio-project " data-aos="zoom-in">
            <div className="public__portafolio-img">
                <img src={images(`./code.png`).default} alt="portafolio item thumb"/>
            </div>
            <h3 className="portafolio-item-title">Proyecto</h3>
            <button type="button" className="btn btn-public btn-public-dark">Ver proyecto</button>
        </div>

    )
}
