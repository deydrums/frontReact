//******************* PublicRoutes ******************* */


import React from 'react';
import PropTypes from 'prop-types'
import {Redirect, Route} from "react-router-dom";




export const PublicRoute = ({
    isAuthenticated,
    component:Component,
    ...rest
}) => {

    //const lastPath = localStorage.getItem('lastPath') || '/';

    return (
        <Route {...rest}
            component = { (props)=>(
                (isAuthenticated)
                    // ? <Redirect to={lastPath}/>
                    ? <Redirect to='/config'/>
                    : <Component {...props}/>
            )}
        
        />
    )
}

PublicRoute.protoTypes ={
    isAuthenticated: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
}