import React from 'react';
import { useForm } from '../../hooks/useForm';

export const ContactScreen = () => {

    const [formvalues, handleInputChange] = useForm({
        name: 'Juan',
        email: 'juan@juan.com',
        message: 'Mensaje'
    });

    const {name, email, message} = formvalues;

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formvalues);
    }
    
    return (
        <section className="public__contact">
            <div className="public__container">
                <h2 className="public__title color-white">Contacto</h2>
                <div className="public__contact-cont">
                    <div className="public__contact-content">
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            placeholder="Nombre..."
                            name = "name"
                            className="public__contact-input"
                            autoComplete="off"
                            onChange={handleInputChange}
                            value={name}
                        />

                        <input
                            type="email"
                            placeholder="Email..."
                            name = "email"
                            className="public__contact-input"
                            autoComplete="off"
                            onChange={handleInputChange}
                            value={email}
                        />

                        <textarea
                            placeholder="Mensaje..."
                            name = "message"
                            className="public__contact-input public__contact-textarea"
                            onChange={handleInputChange}
                            value={message}
                        >

                        </textarea>

                        <button
                            type="submit"
                            className = "btn btn-block public__contact-btn"
                        >
                            Enviar
                        </button>
                    </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
