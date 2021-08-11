//******************* AppRouter ******************* */

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    HashRouter as Router,
    Switch,
    Redirect
  } from "react-router-dom";
import { startChecking } from "../actions/auth";
import { LoadingScreen } from "../components/ui/LoadingScreen";
import { AuthRouter } from "./AuthRouter";
import { DashboardRoutes } from "./DashboardRoutes";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

export const AppRouter = () => {

    const dispatch = useDispatch();
    const {checking, uid} = useSelector(state => state.auth)

    useEffect(() => {
        dispatch(startChecking());
    }, [dispatch])

    if(checking) {
        return(<LoadingScreen/>)
    }

    return (
        <Router>
            <Switch>
                <PublicRoute
                    path="/auth" 
                    component ={AuthRouter}
                    isAuthenticated={!!uid}
                />
                <PrivateRoute 
                    path="/config" 
                    component ={DashboardRoutes}
                    isAuthenticated={!!uid}
                />
                <Redirect to = "/auth/login"/>
            </Switch>
        </Router>
    )
}
