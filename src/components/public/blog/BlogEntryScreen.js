import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startGetEntry } from '../../../actions/blog';
import ReactHtmlParser from 'react-html-parser';
import { LoadingIconScreenPrimary } from '../../ui/LoadingIconScreen';
import { images } from '../../../helpers/getImages';
import { HeaderBlogNavigation } from './HeaderBlogNavigation';
import moment from 'moment';


const baseUrl = process.env.REACT_APP_API_URL;


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
        <HeaderBlogNavigation id = {id} name = {name} title = {title} category_id = {category_id}/>
            <div className="public__entry-blog-container">
                <div className="public__entry-blog-content">

                    {
                        publicActiveEntry &&

                        <div className="public__entry-blog-head animate__animated animate__fadeIn">
                            <div className="public__entry-blog-cont-desc">
                                <div className="public__entry-blog-head-cont-date">
                                    <div className="public__entry-blog-head-cont-date-ci">
                                        <div className="public__entry-blog-head-cont-date-month">
                                            {moment(publicActiveEntry.created_at).format('MMMM')}
                                        </div>
                                        <div className="public__entry-blog-head-cont-date-day">
                                            {moment(publicActiveEntry.created_at).format('d')}
                                        </div>
                                        <div className="public__entry-blog-head-cont-date-year">
                                            {moment(publicActiveEntry.created_at).format('yyyy')}
                                        </div>
                                    </div>
                                </div>
                                <div className="public__entry-blog-head-cont-info">
                                    <div className="public__entry-blog-head-cont-info-title">
                                        {publicActiveEntry.title}
                                        <br/>
                                        <div className="public__entry-blog-head-cont-info-title-details">
                                            <i className="fas fa-user m-1"/>{publicActiveEntry.user.name} | <i className="fas fa-sitemap m-1"/>{publicActiveEntry.category.name}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="public__entry-blog-cont-image">
                                {
                                    publicActiveEntry.image
                                    ?
                                    <img src={`${baseUrl}/entry/get-image/${publicActiveEntry.image.replace('.','/')}`}alt=""/>
                                    :
                                    <img src={images(`./code.png`).default} alt=""/>
                                }
                            </div>
                        </div>
                    }


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
                        <div className="animate__animated animate__fadeIn">
                            {ReactHtmlParser(publicActiveEntry.content)}
                        </div>
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
