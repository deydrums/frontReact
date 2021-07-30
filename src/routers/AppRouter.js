import {
    HashRouter as Router,
    Switch,
    Route,
    Redirect
  } from "react-router-dom";
import { PrincipalScreen } from '../components/principal/PrincipalScreen';
import { AuthRouter } from "./AuthRouter";

export const AppRouter = () => {

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
