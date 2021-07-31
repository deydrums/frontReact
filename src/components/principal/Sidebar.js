import React from 'react';
import { startLogout } from '../../actions/auth';
import { useDispatch, useSelector } from 'react-redux';


export const Sidebar = () => {
    const dispatch = useDispatch();
    const {name} = useSelector(state => state.auth)
    const handleLogout = () => {
        dispatch(startLogout());
    }
    return (
        <nav className = "principal__sidebar">
            <div className="principal__userprofile">

                <div className="principal__userphoto">
                    <div className="principal__userimg">
                        <img src="https://res.cloudinary.com/dzxnquue1/image/upload/nophoto_user_p2j2qq" alt="user"></img>
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
                    <h4 className="btn"><i className="fas fa-cog"></i> Ajustes de usuario</h4>
                </div>
            </div>

            <div className="principal__options">
                <div className="principal_option pointer">
                    <div className="principal_option_icon">
                        <i className="fas fa-users"></i>
                    </div>
                    <div className="principal_option_text">
                        Usuarios
                    </div>
                </div>
            </div>


        </nav>
    )
}
