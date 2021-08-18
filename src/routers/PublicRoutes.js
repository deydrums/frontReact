import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { Footer } from '../components/public/Footer';
import { IndexScreen } from '../components/public/IndexScreen';
import { NavBar } from '../components/public/NavBar';
import { PublicBlogRoutes } from './PublicBlogRoutes';

export const PublicRoutes = () => {

    return (
        <>
                <NavBar/>
                    <div className="public__principal__content">
                        <Switch>
                            <Route exact path="/" component={IndexScreen}/>
                            <Route path="/blog" component={PublicBlogRoutes}/>
                            <Redirect to="/"/>
                        </Switch>
                    </div>
                <Footer/>

        </>
    )
}
