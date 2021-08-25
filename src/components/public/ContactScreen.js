import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeError, setError, startContactEmail } from '../../actions/ui';
import { useForm } from '../../hooks/useForm';
import { LoadingIconScreen } from '../ui/LoadingIconScreen';
import validator from 'validator';

export const ContactScreen = () => {

    const dispatch = useDispatch();
    const {msgError, fetch} = useSelector(state => state.ui)

    
    //useEffect hook

    useEffect(() => {
        dispatch(removeError());
    }, [dispatch])

    const [formvalues, handleInputChange, reset] = useForm({
        name: '',
        email: '',
        message: ''
    });

    const {name, email, message} = formvalues;

    const handleSubmit = (e) => {
        e.preventDefault();
        if(isFormValid()){
            dispatch(startContactEmail(formvalues,reset));
        }
    }
    
    //form validate
    const isFormValid = () =>{
        if(name.trim().length ===0){
            dispatch(setError('El nombre es requerido'));
            return false;
        }else if(!validator.isEmail(email)){
            dispatch(setError('Ingresa un email valido'));
            return false;
        }else if(message.trim().length ===0){
            dispatch(setError('El mensaje es requerido'));
            return false;
        }
        dispatch(removeError());
        return true;
    };

    const handleRemoveError = () => {
        dispatch(removeError());
    }


    const adjustHeight = (e) => {
        e.target.style.height = 'inherit';
        e.target.style.height = `${e.target.scrollHeight}px`; 
    }

    return (
        <section className="public__contact" id = 'contacto'>
            <div className="public__container">
                <div className="public__contact-cont">
                    <div className="public__contact-content" data-aos="zoom-in">
                        <h2 className="public__contact-title color-white">Contáctame</h2>

                        <div className="public__contact-err">
                        {
                            msgError&&<div className="auth__alert-error">{msgError}</div>
                        }
                        </div>
                        <form onSubmit={handleSubmit}>

                            <input
                                type="text"
                                placeholder="Nombre..."
                                name = "name"
                                className="public__contact-input"
                                autoComplete="off"
                                onChange={handleInputChange}
                                value={name}
                                onClick={handleRemoveError}
                            />

                            <input
                                type="email"
                                placeholder="Email..."
                                name = "email"
                                className="public__contact-input"
                                autoComplete="off"
                                onChange={handleInputChange}
                                value={email}
                                onClick={handleRemoveError}
                            />

                            <textarea
                                placeholder="Mensaje..."
                                name = "message"
                                className="public__contact-input public__contact-textarea"
                                onChange={handleInputChange}
                                value={message}
                                onClick={handleRemoveError}
                                onKeyDown={adjustHeight}
                            />


                            <button
                                type="submit"
                                className = "btn btn-block public__contact-btn"
                                disabled={fetch}
                            >
                                {
                                    fetch?<LoadingIconScreen/>:<span>Enviar</span>
                                }
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
