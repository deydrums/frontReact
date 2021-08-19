import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startGetEntry } from '../../../actions/blog';
import ReactHtmlParser from 'react-html-parser';
import { LoadingIconScreenPrimary } from '../../ui/LoadingIconScreen';
import { images } from '../../../helpers/getImages';
import { HeaderBlogNavigation } from './HeaderBlogNavigation';

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

                    <div className="public__entry-blog-head">
                        <div className="public__entry-blog-cont-desc">
                            <div className="public__entry-blog-head-cont-date">
                                <div className="public__entry-blog-head-cont-date-ci">
                                    <div className="public__entry-blog-head-cont-date-month">
                                        JUL
                                    </div>
                                    <div className="public__entry-blog-head-cont-date-day">
                                        31
                                    </div>
                                    <div className="public__entry-blog-head-cont-date-year">
                                        2021
                                    </div>
                                </div>
                            </div>
                            <div className="public__entry-blog-head-cont-info">
                                <div className="public__entry-blog-head-cont-info-title">
                                    Titulo de la entrada Titulo de la entradaTitulo de
                                    <br/>
                                    <div className="public__entry-blog-head-cont-info-title-details">
                                        <i className="fas fa-user m-1"/>Usuario | <i className="fas fa-sitemap m-1"/>Categoria
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="public__entry-blog-cont-image">
                            <img src={images(`./code.png`).default} alt=""/>
                        </div>
                    </div>
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
