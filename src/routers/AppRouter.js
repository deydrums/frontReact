import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
    HashRouter as Router,
    Switch,
    Route,
    Redirect
  } from "react-router-dom";
import { startChecking } from "../actions/auth";
import { PrincipalScreen } from '../components/principal/PrincipalScreen';
import { AuthRouter } from "./AuthRouter";

export const AppRouter = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(startChecking());
    }, [dispatch])

    return (
        <Router>
            <Switch>
                <Route
                    path="/auth" 
                    component ={AuthRouter}
                />
                <Route 
                    exact 
                    path="/" 
                    component ={PrincipalScreen}
                />
                <Redirect to = "/auth/login"/>
            </Switch>
        </Router>
    )
}
