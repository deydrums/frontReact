import React from 'react'
import { images } from '../../helpers/getImages'

export const PortafolioScreen = () => {
    return (
        <section className="public__portafolio" id="portafolio">
            <div className="public__portafolio-container">

                <div className="public__portafolio-title">
                    <h2>Portafolio</h2>
                </div>

                <div className="public__portafolio-content">

                    {/* <!--Portafolio Item Start--> */}
                    <div className="public__portafolio-project">
                        <div className="public__portafolio-img">
                            <img src={images(`./code.png`).default} alt="portafolio item thumb"/>
                        </div>
                        <h3 className="portafolio-item-title">Proyecto</h3>
                        <button type="button" className="btn btn-public">Ver proyecto</button>
                    </div>
                    {/* <!--Portafolio Item End--> */}
                    {/* <!--Portafolio Item Start--> */}
                    <div className="public__portafolio-project">
                        <div className="public__portafolio-img">
                            <img src={images(`./code.png`).default} alt="portafolio item thumb"/>
                        </div>
                        <h3 className="portafolio-item-title">Proyecto</h3>
                        <button type="button" className="btn btn-public">Ver proyecto</button>
                    </div>
                    {/* <!--Portafolio Item End--> */}
                    {/* <!--Portafolio Item Start--> */}
                    <div className="public__portafolio-project">
                        <div className="public__portafolio-img">
                            <img src={images(`./code.png`).default} alt="portafolio item thumb"/>
                        </div>
                        <h3 className="portafolio-item-title">Proyecto</h3>
                        <button type="button" className="btn btn-public">Ver proyecto</button>
                    </div>
                    {/* <!--Portafolio Item End--> */}

                    {/* <!--Portafolio Item Start--> */}
                    <div className="public__portafolio-project">
                        <div className="public__portafolio-img">
                            <img src={images(`./code.png`).default} alt="portafolio item thumb"/>
                        </div>
                        <h3 className="portafolio-item-title">Proyecto</h3>
                        <button type="button" className="btn btn-public">Ver proyecto</button>
                    </div>
                    {/* <!--Portafolio Item End--> */}
                    {/* <!--Portafolio Item Start--> */}
                    <div className="public__portafolio-project">
                        <div className="public__portafolio-img">
                            <img src={images(`./code.png`).default} alt="portafolio item thumb"/>
                        </div>
                        <h3 className="portafolio-item-title">Proyecto</h3>
                        <button type="button" className="btn btn-public">Ver proyecto</button>
                    </div>
                    {/* <!--Portafolio Item End--> */}
                    {/* <!--Portafolio Item Start--> */}
                    <div className="public__portafolio-project">
                        <div className="public__portafolio-img">
                            <img src={images(`./code.png`).default} alt="portafolio item thumb"/>
                        </div>
                        <h3 className="portafolio-item-title">Proyecto</h3>
                        <button type="button" className="btn btn-public">Ver proyecto</button>
                    </div>
                    {/* <!--Portafolio Item End--> */}
                </div>
            </div>
        </section>

    
    )
}
