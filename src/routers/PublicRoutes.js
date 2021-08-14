import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { BlogEntryScreen } from '../components/public/blog/BlogEntryScreen';
import { BlogScreen } from '../components/public/blog/BlogScreen';
import { Footer } from '../components/public/Footer';
import { IndexScreen } from '../components/public/IndexScreen';
import { NavBar } from '../components/public/NavBar';

export const PublicRoutes = () => {

    return (
        <>
                <NavBar/>
                    <div className="public__principal__content">
                        <Switch>
                            <Route exact path="/" component={IndexScreen}/>
                            <Route exact path="/blog" component={BlogScreen}/>
                            <Route exact path="/blog/entrada/:id" component={BlogEntryScreen}/>
                            <Redirect to="/"/>
                        </Switch>
                    </div>
                <Footer/>

        </>
    )
}
