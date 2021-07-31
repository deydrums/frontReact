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
            <div className="principal__sidebar-btnlogout">
                <button 
                    className="btn"
                    onClick={handleLogout}
                >
                    Cerrar sesión
                </button>
            </div>
            <div className="principal__sidebar-navbar">
                <i className="fa fa-moon"></i>
                <h3>
                    <span> {name} </span>
                </h3>
            </div>
            <div className="principal__new-entry">
                <i className="far fa-calendar-plus fa-5x"></i>
                <p className = "mt-5">Nueva entrada</p>
            </div>
        </nav>
    )
}
