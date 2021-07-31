import React from 'react'
import { Link } from 'react-router-dom'

export const RegisterScreen = () => {
    return (
        <>
            <h3 className="auth__title">Registrarse</h3>

                <div className="auth__alert-error"> 
                    Error
                </div>
      
            <form>
                <input
                    type="text"
                    placeholder="Nombre..."
                    name = "name"
                    className="auth__input"
                    autoComplete="off"
                />
                <input
                    type="text"
                    placeholder="Email..."
                    name = "email"
                    className="auth__input"
                    autoComplete="off"
                />
                <input
                    type="password"
                    placeholder="Contraseña..."
                    name = "password"
                    className="auth__input"
                />
                <input
                    type="password"
                    placeholder="Confirmar contraseña..."
                    name = "password2"
                    className="auth__input"
                />
                <button
                    type="submit"
                    className = "btn btn-primary btn-block mb-3"
                >
                    Registrarse
                </button>
              
                <Link 
                    to="/auth/login"
                    className="link"
                >
                    Logueate aquí
                </Link>
            </form>
        </>
    )
}
