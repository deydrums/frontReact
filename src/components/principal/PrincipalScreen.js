import React from 'react'
import { useDispatch } from 'react-redux'
import { startLogout } from '../../actions/auth';

export const PrincipalScreen = () => {
    const dispatch = useDispatch();
    const handleLogout = () => {
        dispatch(startLogout());
    }

    return (
        <div>
            <button onClick={handleLogout}>
                Salir
            </button>
        </div>
    )
}
