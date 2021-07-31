import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { removeError, setError } from '../../actions/ui';
import { useForm } from '../../hooks/useForm';
import validator from 'validator';
import { forgotPassword } from '../../actions/auth';
import { Link } from 'react-router-dom';
import { LoadingIconScreen } from '../ui/LoadingIconScreen';

export const ForgotPasswordScreen = () => {

        //redux
        const dispatch = useDispatch();
        const {msgError, fetch} = useSelector(state => state.ui);
    
        useEffect(() => {
            dispatch(removeError());
        }, [])
    
        //useform hook
        const [formValues, handleInputChange, reset] = useForm({
            email: 'dagarcia100@gmail.com'
        });
    
        const {email} = formValues;
    
        //submit event
        const handleSubmit = (e) => {
            e.preventDefault();
            if (isFormValid()){
                dispatch(forgotPassword(email));
            }
        };
    
        //form validate
        const isFormValid = () =>{
            if(!validator.isEmail(email)){
                dispatch(setError('Ingresa un email valido'));
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

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Email..."
                    name = "email"
                    className="auth__input mt-3"
                    autoComplete="off"
                    value={email}
                    onChange={handleInputChange}
                />

                <button
                    type="submit"
                    className = "btn btn-primary btn-block mt-2"
                    disabled={fetch}
                >
                    {
                        fetch?<LoadingIconScreen/>:<span>Recuperar contraseña</span>
                    }
                </button>

                <Link 
                    to="/auth/login"
                    className="link link-d m-2"
                >
                    Volver
                </Link>


            </form>
        </>
    )
}
