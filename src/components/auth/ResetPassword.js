import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { removeError, setError } from '../../actions/ui';
import { useForm } from '../../hooks/useForm';

export const ResetPassword = () => {

        //redux
        const dispatch = useDispatch();
        const {msgError} = useSelector(state => state.ui);
    
        useEffect(() => {
            dispatch(removeError());
        }, [])
    
        //useform hook
        const [formValues, handleInputChange, reset] = useForm({
            password: '12345678',
            password_confirmation: '12345678'
        });
    
        const {password, password_confirmation} = formValues;
    
        //submit event
        const handleSubmit = (e) => {
            e.preventDefault();
            if (isFormValid()){
                console.log(formValues);
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

                />
                <button
                    type="submit"
                    className = "btn btn-primary btn-block mb-3"
                >
                    Actualizar contraseña
                </button>

            </form>
        </>
    )
}
