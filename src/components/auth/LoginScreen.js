import React from 'react'
import { Link } from 'react-router-dom'

export const LoginScreen = () => {
    return (
        <>
            <h3 className="auth__title">Iniciar sesión</h3>
            <form>
                <input
                    type="text"
                    placeholder="Email..."
                    name = "email"
                    className="auth__input"
                    autoComplete="off"
                />
                <input
                    type="password"
                    placeholder="Password..."
                    name = "password"
                    className="auth__input"
                />
                <button
                    type="submit"
                    className = "btn btn-primary btn-block"
                >
                    Entrar
                </button>
                <Link 
                    to="/auth/register"
                    className="link link-d"
                >
                    ¿Olvidaste tu contraseña?
                </Link>


                <h3 className="auth__text m-2">¿No tienes una cuenta?</h3>

                <Link 
                    to="/auth/register"
                    className= "btn-register mb-5"
                >
                    Registrarse
                </Link>

                

            </form>
        </>
    )
}
