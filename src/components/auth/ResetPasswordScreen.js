//******************* ResetPasswordScreen ******************* */

import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { removeError, setError } from '../../actions/ui';
import { useForm } from '../../hooks/useForm';
import {Redirect} from "react-router-dom";
import { resetPassword } from '../../actions/auth';
import { LoadingIconScreen } from '../ui/LoadingIconScreen';
import { getParams } from '../../helpers/getParams';

export const ResetPasswordScreen = ({...rest}) => {

        //redux
        const dispatch = useDispatch();
        const {msgError, fetch, redirectLogin} = useSelector(state => state.ui);


        //useEffect
        useEffect(() => {
            dispatch(removeError());
        }, [dispatch])


        //useform hook
        const [formValues, handleInputChange] = useForm({
            password: '',
            password_confirmation: ''
        });
    
        const {password, password_confirmation} = formValues;

        //submit event
        const handleSubmit = (e) => {
            e.preventDefault();
            if (isFormValid()){
                dispatch(resetPassword(email, password,password_confirmation, token));
            }
        };
    
        //form validate
        const isFormValid = () =>{
            if (password.length < 8|| password_confirmation.length < 8){
                dispatch(setError('La contraseña debe de ser como minimo de 8 caracteres'));
                return false;
            }else if (password !== password_confirmation || password.length < 8){
                dispatch(setError('Las contraseñas no coinciden'));
                return false;
            }
            dispatch(removeError());
            return true;
        };

        const { token, email } = getParams(rest);

        //redirect to login if not have params
        if( !token || !email){
            return getParams(rest);
        }

        //redirect to login if not change password
        if(redirectLogin){return <Redirect to="/auth/login"/>}

    return (
        <>
            <h3 className="auth__title">Recuperar contraseña</h3>
            {
                msgError&&<div className="auth__alert-error">{msgError}</div>
            }

            <h3 className="auth__text m-2">Ingresa la nueva contraseña para la cuenta: {email}</h3>


            <form onSubmit={handleSubmit}>
            <input
                    type="password"
                    placeholder="Contraseña..."
                    name = "password"
                    className="auth__input"
                    onChange={handleInputChange}
                    value={password}

                />
                <input
                    type="password"
                    placeholder="Confirmar contraseña..."
                    name = "password_confirmation"
                    className="auth__input"
                    onChange={handleInputChange}
                    value={password_confirmation}
                    disabled={fetch}

                />
                <button
                    type="submit"
                    className = "btn btn-primary btn-block mb-3"
                    disabled={fetch}
                >
                    {
                        fetch?<LoadingIconScreen/>:<span>Actualizar contraseña</span>
                    }
                </button>

            </form>
        </>
    )
}
