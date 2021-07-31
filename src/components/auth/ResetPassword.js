import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { removeError, setError } from '../../actions/ui';
import { useForm } from '../../hooks/useForm';
import {Redirect, useParams} from "react-router-dom";
import { resetPassword } from '../../actions/auth';
import { LoadingIconScreen } from '../ui/LoadingIconScreen';

export const ResetPassword = ({...rest}) => {
        const getParams =()=>{
            if(rest.location.search && rest.location.search != '' && rest.location.search != undefined){
                const urlParams = new URLSearchParams(rest.location.search);
                const token = urlParams.get('token');
                const email = urlParams.get('email');
                if(token && token != '' & token != undefined && email && email != '' && email != undefined ){
                    return ({token, email});
                }else{
                    return <Redirect to = "/auth/login" />
                }
            }else{
                return <Redirect to = "/auth/login" />
            }
        }

        //redux
        const dispatch = useDispatch();
        const {msgError, fetch} = useSelector(state => state.ui);


        useEffect(() => {
            dispatch(removeError());
        }, [])

        
        //useform hook
        const [formValues, handleInputChange, reset] = useForm({
            password: '12345678',
            password_confirmation: '12345678'
        });
    
        const {password, password_confirmation} = formValues;
        const { token, email } = getParams();


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
                    name = "password_confirm"
                    className="auth__input"
                    onChange={handleInputChange}
                    value={password_confirmation}
                    disabled={fetch}

                />
                <button
                    type="submit"
                    className = "btn btn-primary btn-block mb-3"
                >
                    {
                        fetch?<LoadingIconScreen/>:<span>Actualizar contraseña</span>
                    }
                </button>

            </form>
        </>
    )
}
