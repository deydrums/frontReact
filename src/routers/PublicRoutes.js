import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { FooterScreen } from '../components/public/FooterScreen';
import { IndexScreen } from '../components/public/IndexScreen';
import { NavBar } from '../components/public/NavBar';
import { PublicBlogRoutes } from './PublicBlogRoutes';

export const PublicRoutes = ({location}) => {

    const {pathname} = location;
    return (
        <>
                <NavBar pathname={pathname}/>
                    <div className="public__principal__content">
                        <Switch>
                            <Route exact path="/" component={IndexScreen}/>
                            <Route path="/blog" component={PublicBlogRoutes}/>
                            <Redirect to="/"/>
                        </Switch>
                    </div>
                <FooterScreen/>

        </>
    )
}
