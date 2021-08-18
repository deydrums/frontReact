import React from 'react'
import { Link, NavLink, Redirect, Route, Switch } from 'react-router-dom'
import { BlogEntryScreen } from '../components/public/blog/BlogEntryScreen'
import { BlogScreen } from '../components/public/blog/BlogScreen'
import { HeaderBlog } from '../components/public/blog/HeaderBlog'


export const PublicBlogRoutes = ({location}) => {

    const onClickButtonMore = () => {
        const enlacesHeader = document.querySelector('.public__blog-nav-links');
        enlacesHeader.classList.toggle("show_blog-nav-links");
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
                    <NavLink className= "public__blog-nav-links-link" to = "/blog" >Blog</NavLink>
                        <NavLink className= "public__blog-nav-links-link" to = "/blog" >Blog</NavLink>
                        <NavLink className= "public__blog-nav-links-link" to = "/blog" >Blog</NavLink>
                        <NavLink className= "public__blog-nav-links-link" to = "/blog" >Blog</NavLink>
                        <NavLink className= "public__blog-nav-links-link" to = "/blog" >Blog</NavLink>
                        <NavLink className= "public__blog-nav-links-link" to = "/blog" >Blog</NavLink>
                        <NavLink className= "public__blog-nav-links-link" to = "/blog" >Blog</NavLink>
                        <NavLink className= "public__blog-nav-links-link" to = "/blog" >Blog</NavLink>
                        <NavLink className= "public__blog-nav-links-link" to = "/blog" >Blog</NavLink>
                        <NavLink className= "public__blog-nav-links-link" to = "/blog" >Blog</NavLink>
                        <NavLink className= "public__blog-nav-links-link" to = "/blog" >Blog</NavLink>
                        <NavLink className= "public__blog-nav-links-link" to = "/blog" >Blog</NavLink>
                        <NavLink className= "public__blog-nav-links-link" to = "/blog" >Blog</NavLink>
                        <NavLink className= "public__blog-nav-links-link" to = "/blog" >Blog</NavLink>

                    </div>
                </div>
                <div className="public__blog-entries-head">
                    <div className="public__blog-entries-head-cont">
                        <div className="public__blog-entries-head-txt">
                            <h1><Link className= "public__blog__links" to = "/blog" >Blog</Link> <i className="fas fa-angle-right"></i> Ultimas Entradas</h1>
                        </div>
                    </div>
                </div>

                <Switch>
                    <Route exact path="/blog" component={BlogScreen}/>
                    <Route exact path="/blog/entrada/:id/:title?" component={BlogEntryScreen}/>
                    <Redirect to="/blog"/>
                </Switch>
            </div>
        </>
    )
}
