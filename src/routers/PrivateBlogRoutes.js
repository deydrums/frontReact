import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, Redirect, Route, Switch } from 'react-router-dom'
import { startGetCategories, startGetEntries } from '../actions/blog'
import { BlogCategoriesScreen } from '../components/private-blog/BlogCategoriesScreen'
import { BlogEntriesScreen } from '../components/private-blog/BlogEntriesScreen'


export const PrivateBlogRoutes = ({location}) => {
    
    const dispatch = useDispatch();
    const {fetch} = useSelector(state => state.ui)

    useEffect(() => {
        dispatch(startGetEntries());
        dispatch(startGetCategories());
    },[dispatch]);

    return (
        <div className="principal__content scroll_options">
            <div className="blog__content ">
                <div className="blog__text">
                    <NavLink style={fetch ? {pointerEvents: "none"} : null} replace={"/config/blog/entries" === location.pathname} to = {"/config/blog/entries"} className="btn btn-primary w-100" activeClassName = "btn-primary-selected">Entradas</NavLink>
                    <NavLink style={fetch ? {pointerEvents: "none"} : null} replace={"/config/blog/categories" === location.pathname} to = {"/config/blog/categories"} className="btn btn-primary w-100" activeClassName = "btn-primary-selected">Categorias</NavLink>
                </div>
                    <Switch>
                        <Route exact path="/config/blog/entries" component={BlogEntriesScreen}/>
                        <Route exact path="/config/blog/categories" component={BlogCategoriesScreen}/>
                        <Redirect to="/config/blog/entries"/>
                    </Switch>
            </div>
        </div>
    )
}
