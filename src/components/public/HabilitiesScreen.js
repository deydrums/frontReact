import React from 'react'

export const HabilitiesScreen = () => {
    return (
        <section className="public__about-us">
            <div className="public__container public__container__p-60">
                <h2 className="public__title">Habilidades</h2>
                <div className="public__articles">
                    <div className="public__article" data-aos="zoom-in-right">
                        <div className="public__icon">
                            <i className="fas fa-paint-brush"></i>
                        </div>
                        <h3>Diseño web</h3>
                        <h3><i className="fab fa-css3-alt"/> <i className="fab fa-html5"/></h3>
                        <p>Diseño de sitios web partiendo de su estructura con el lenguaje de etiquetas HTML5,
                            hasta su maquetacion empleando CSS3.
                        </p>
                    </div>
                    <div className="public__article" data-aos="zoom-in-right">
                        <div className="public__icon">
                            <i className="fab fa-html5"></i>
                        </div>
                        <h3>PHP</h3>
                        <h3><i className="fab fa-laravel"/> <i className="fab fa-symfony"/></h3>
                        <p> Desarrollo de sitios web con PHP nativo empleando MVC y frameworks como Symfony y Laravel.
                        </p>
                    </div>
                    <div className="public__article" data-aos="zoom-in-right">
                        <div className="public__icon">
                            <i className="fab fa-js-square"></i>
                        </div>
                        <h3>JavaScript</h3>
                        <h3><i className="fab fa-react"/> <i className="fab fa-angular"/> <i className="fab fa-node-js"/></h3>
                        <p> Desarrollo de sitios web empleando JavaScript nativo, angular y ReactJS para el frontend y el
                            entorno nodeJS junto a Express en el backend. 
                        </p>
                    </div>
                    <div className="public__article" data-aos="zoom-in-right">
                        <div className="public__icon">
                            <i className="fas fa-server"></i>
                        </div>
                        <h3>RESTful API</h3>
                        <p>Construccion de Api RESTful en JavaScript con nodeJS y Express y en PHP con Laravel y Symfony,
                            empleando los verbos GET, POST, PUT, DELETE, autenticacion con tokens, registro, login, etc.
                        </p>
                    </div>
                    <div className="public__article" data-aos="zoom-in-right">
                        <div className="public__icon">
                            <i className="fas fa-project-diagram"></i>
                        </div>
                        <h3>Networking</h3>
                        <p>Configuraciones en equipos Cisco y Mikrotik como DHCP, enrutamient estatico y dinamico (OSPF,
                            EIGRP, RIPv2), Vlans, NAT, etc.
                        </p>
                    </div>
                    <div className="public__article" data-aos="zoom-in-right">
                        <div className="public__icon">
                            <i className="fas fa-database"></i>
                        </div>
                        <h3>Bases de datos</h3>
                        <p>Gestion de base de datos relacionales (MariaDB y MySQL) comandos por consola
                             (Select, Where, OrderBy, Joins, etc), y no realacionales como MongoDB</p>
                    </div>

                </div>
            </div>
        </section>
    )
}
