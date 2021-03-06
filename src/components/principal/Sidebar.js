import React from 'react';
import { startLogout } from '../../actions/auth';
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';

const baseUrl = process.env.REACT_APP_API_URL;

export const Sidebar = () => {
    
    const dispatch = useDispatch();
    const {name, avatar} = useSelector(state => state.auth)
    const handleLogout = () => {
        dispatch(startLogout());
    }
    return (
        <nav className = "principal__sidebar" >
            <div className="principal__userprofile">

                <div className="principal__userphoto">
                    <div className="principal__userimg">
                        {
                            avatar
                            ?
                                <img src={`${baseUrl}/user/get-avatar/${avatar.replace('.','/')}`} alt="user"></img>
                            :
                                <img src='https://i.stack.imgur.com/34AD2.jpg' alt="user"></img>    
                        }
                        
                    </div>
                </div>

                <div className="principal__userdesc">
                    <div className="principal__buttonlogout">
                        <button 
                            className="btn logout"
                            onClick={handleLogout}
                        >
                        <i className="fas fa-sign-out-alt"></i> Cerrar sesión
                        </button>
                    </div>
                    <h3>{name}</h3>
                    <h4 className="btn">
                        <i className="fas fa-cog"></i>
                        <Link 
                                className="btn link-options"
                                to="/config/user/settings"
                        >
                                 Ajustes de usuario
                        </Link>
                    
                    </h4>




                </div>
            </div>

            <div className="principal__options" >

                <NavLink to = "/config/inicio" className="principal_option pointer link-options mb-2"  activeClassName = "principal_opcion--active" >
                    <div className="principal_option_icon">
                        <i className="fas fa-home"></i>
                    </div>
                    <div className="principal_option_text">
                        Inicio
                    </div>
                </NavLink>

                <NavLink to = "/config/users" className="principal_option pointer link-options mb-2" activeClassName = "principal_opcion--active" >
                    <div className="principal_option_icon">
                        <i className="fas fa-users"></i>
                    </div>
                    <div className="principal_option_text">
                        Usuarios
                    </div>
                </NavLink>
                
                <NavLink to = "/config/blog" className="principal_option pointer link-options mb-2" activeClassName = "principal_opcion--active" >
                    <div className="principal_option_icon">
                        <i className="fab fa-microblog"></i>
                    </div>
                    <div className="principal_option_text">
                        Blog 
                    </div>
                </NavLink>


                <NavLink to = "/config/portafolio" className="principal_option pointer link-options mb-2" activeClassName = "principal_opcion--active" >
                    <div className="principal_option_icon">
                        <i className="fas fa-file-contract"></i>
                    </div>
                    <div className="principal_option_text">
                        Portafolio 
                    </div>
                </NavLink>

            </div>


        </nav>
    )
}
