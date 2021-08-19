import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, Redirect, Route, Switch } from 'react-router-dom'
import { startGetCategories } from '../actions/blog'
import { BlogEntryScreen } from '../components/public/blog/BlogEntryScreen'
import { BlogScreen } from '../components/public/blog/BlogScreen'
import { HeaderBlog } from '../components/public/blog/HeaderBlog'


export const PublicBlogRoutes = () => {

    const dispatch = useDispatch();
    const {categories} = useSelector(state => state.blog)

    useEffect(() => {
        dispatch(startGetCategories());
    }, [dispatch])

    const onClickButtonMore = () => {
        const enlacesHeader = document.querySelector('.public__blog-nav-links');
        enlacesHeader.classList.toggle("show_blog-nav-links");
    }

    const handleCloseClick = () => {
        const enlacesHeader = document.querySelector('.public__blog-nav-links');
        enlacesHeader.classList.remove("show_blog-nav-links");
    }

    return (
        <>  
            <HeaderBlog/>
            <div className="public__blog-entries">
                <div className="public__blog-nav">
                    <div className="public__blog-nav-btn">
                        <i className="fas fa-chevron-circle-down pointer" onClick={onClickButtonMore}></i>
                    </div>
                    <div className="public__blog-nav-links">
                        {
                            categories.map(category => (
                                <NavLink 
                                    className= "public__blog-nav-links-link"
                                    activeClassName="public__blog-nav-links-link-selected"
                                    key={category.id}
                                    to = {`/blog/${category.id}/${category.name}`}
                                    onClick={handleCloseClick}
                                >
                                    {category.name}
                                </NavLink>
                            ))
                        }
                    </div>
                </div>
                <Switch>
                    <Route exact path="/blog" component={BlogScreen}/>
                    <Route exact path="/blog/:category_id/:name" component={BlogScreen}/>
                    <Route exact path="/blog/:category_id/:name/:id/:title" component={BlogEntryScreen}/>
                    <Redirect to="/blog"/>
                </Switch>
            </div>
        </>
    )
}
