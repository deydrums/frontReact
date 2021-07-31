import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { removeError, setError } from '../../actions/ui';
import { useForm } from '../../hooks/useForm';
import validator from 'validator';
import { startLogin } from '../../actions/auth';
import { Link } from 'react-router-dom';

export const ForgotPasswordScreen = () => {

        //redux
        const dispatch = useDispatch();
        const {msgError} = useSelector(state => state.ui);
    
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
                console.log(formValues)
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
                >
                    Recuperar contraseña
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
