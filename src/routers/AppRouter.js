//******************* AppRouter ******************* */

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    BrowserRouter  as Router,
    Switch,
    Redirect
  } from "react-router-dom";
import { startChecking } from "../actions/auth";
import { LoadingScreen } from "../components/ui/LoadingScreen";
import { AuthRouter } from "./AuthRouter";
import { DashboardRoutes } from "./DashboardRoutes";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";
import { PublicRoutes } from "./PublicRoutes";
import AOS from 'aos';
import "aos/dist/aos.css";


export const AppRouter = () => {

    useEffect(() => {
        AOS.init({
          duration : 1000
        });
      }, []);
      
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

                <PublicRoutes path="/"/>
                
                <Redirect to = "/auth/login"/>
            </Switch>
        </Router>
    )
}
