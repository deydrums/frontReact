import React from 'react'
import { Link } from 'react-router-dom';

export const HeaderBlogNavigation = ({id, category_id, name, title}) => {

    return (

        <div className="public__blog-entries-head">
            <div className="public__blog-entries-head-cont">
                <div className="public__blog-entries-head-txt">
                    <h1>
                        <Link className= "public__blog__links" to = "/blog" >Blog</Link> 
                        <i className="fas fa-angle-right m-1"></i> 
                        {
                            name
                            ?
                                <Link className= "public__blog__links" to = {`/blog/${category_id}/${name}`} >{name}</Link> 
                            :
                                <>Ultimas entradas</>
                        }

                        {
                            title&&
                            <>
                                <i className="fas fa-angle-right m-1"></i> 
                                <Link className= "public__blog__links" to = {`/blog/${category_id}/${name}`} >{title}</Link> 
                            </>
                        }

                    </h1>
                </div>
            </div>
        </div>
    )
}
