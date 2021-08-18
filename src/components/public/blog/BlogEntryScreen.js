import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startGetEntry } from '../../../actions/blog';
import ReactHtmlParser from 'react-html-parser';
import { LoadingIconScreenPrimary } from '../../ui/LoadingIconScreen';
import { images } from '../../../helpers/getImages';
import { Link } from 'react-router-dom';

export const BlogEntryScreen = ({match}) => {

    const {publicActiveEntry} = useSelector(state => state.blog);
    const {fetch} = useSelector(state => state.ui);

    const {id, category_id, name, title} = match.params;

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(startGetEntry(id));
        window.scrollTo({ top: 220, behavior: 'smooth' });
    },[dispatch, id])

    return (
        <>
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

            <div className="public__entry-blog-container">
                <div className="public__entry-blog-content">
                {
                    fetch
                    ?
                        <div className="public__blog-entries-load">
                            <LoadingIconScreenPrimary/>
                        </div>
                    :
                    (
                        publicActiveEntry 
                        ? 
                            ReactHtmlParser(publicActiveEntry.content)
                        :
                        <div className="public__blog-entries-load">
                            <img src={images(`./404.svg`).default} alt=""/>
                        </div>
                    )
                }
                </div>
            </div>
            <div className="public__blog-entries-head"></div>
        </>
    )
}
