import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { IndexScreen } from '../components/public/IndexScreen';
import { NavBar } from '../components/public/NavBar';

export const PublicRoutes = () => {

    return (
        <>
                 <NavBar/>
                 <div className="public__principal__content">
                <Switch>
                    <Route exact path="/index" component={IndexScreen}/>
                    <Redirect to="/index"/>
                </Switch>
                </div>
        </>
    )
}
