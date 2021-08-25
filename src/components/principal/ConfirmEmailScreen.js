import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startConfirmEmail } from '../../actions/auth';
import { LoadingIconScreen } from '../ui/LoadingIconScreen';

export const ConfirmEmailScreen = () => {

    const {fetch} = useSelector(state => state.ui);
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(startConfirmEmail());
    }

    return (
        <div className ="principal__content principal__index">
            <h1>Ups! <i className="fas fa-tired"></i></h1>
            <p>
                Revisa tu <span>correo electronico</span> para confirmar tu cuenta.
                <br/>
                <br/>
                O bien
                <br/>
                <button className="btn btn-primary btn-block mt-2" onClick={handleClick} disabled={fetch}>
                    {
                        fetch?<LoadingIconScreen/>:<span>Solicitar un nuevo correo</span>
                    }
                </button>

            </p>
        </div>
    )
}
