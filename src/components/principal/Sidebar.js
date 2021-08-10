import React from 'react';
import { startLogout } from '../../actions/auth';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const baseUrl = process.env.REACT_APP_API_URL;

export const Sidebar = () => {
    
    const dispatch = useDispatch();
    const {name, avatar} = useSelector(state => state.auth)
    const handleLogout = () => {
        dispatch(startLogout());
    }
    return (
        <nav className = "principal__sidebar">
            <div className="principal__userprofile">

                <div className="principal__userphoto">
                    <div className="principal__userimg">
                        {
                            avatar
                            ?
                                <img src={`${baseUrl}/user/avatar/${avatar.replace('.','/')}`} alt="user"></img>
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
                                to="/user/settings"
                                replace 
                        >
                                 Ajustes de usuario
                        </Link>
                    
                    </h4>




                </div>
            </div>

            <div className="principal__options">

                <Link to = "/inicio" className="principal_option pointer link-options mb-2" replace >
                    <div className="principal_option_icon">
                        <i className="fas fa-home"></i>
                    </div>
                    <div className="principal_option_text">
                        Inicio
                    </div>
                </Link>

                <Link to = "/users" className="principal_option pointer link-options mb-2" replace >
                    <div className="principal_option_icon">
                        <i className="fas fa-users"></i>
                    </div>
                    <div className="principal_option_text">
                        Usuarios
                    </div>
                </Link>

                <Link to = "/entry-blog" className="principal_option pointer link-options mb-2" replace >
                    <div className="principal_option_icon">
                        <i className="fas fa-file-alt"></i>
                    </div>
                    <div className="principal_option_text">
                        Nueva entrada
                    </div>
                </Link>
            </div>


        </nav>
    )
}
