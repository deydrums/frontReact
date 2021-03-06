//******************* authRouter ******************* */


import React from 'react'
import {Switch, Route, Redirect} from "react-router-dom";
import { ForgotPasswordScreen } from '../components/auth/ForgotPasswordScreen';
import { LoginScreen } from '../components/auth/LoginScreen';
import { RegisterScreen } from '../components/auth/RegisterScreen';
import { ResetPasswordScreen } from '../components/auth/ResetPasswordScreen';

export const AuthRouter = () => {
    return (
        <div className="auth__main ">
            <div className="auth__box-container animate__animated animate__fadeIn">
                <Switch>
                    <Route exact path="/auth/login" component ={LoginScreen}/>
                    <Route exact path="/auth/register" component ={RegisterScreen}/>
                    <Route exact path="/auth/forgotpass" component ={ForgotPasswordScreen}/>
                    <Route exact path="/auth/new-password" component ={ResetPasswordScreen}/>
                    <Redirect to = "/auth/login"/>
                </Switch>
            </div>
        </div>
    )
}
