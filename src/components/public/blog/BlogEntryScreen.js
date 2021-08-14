import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startGetEntry } from '../../../actions/blog';
import ReactHtmlParser from 'react-html-parser';
import { HeaderBlog } from './HeaderBlog';

export const BlogEntryScreen = ({match}) => {

    const {publicActiveEntry} = useSelector(state => state.blog);
    const {id} = match.params;

    const dispatch = useDispatch();
    console.log(publicActiveEntry);

    useEffect(() => {
        dispatch(startGetEntry(id));
    },[dispatch, id])

    return (
        <>
            <HeaderBlog/>
            <div className="public__blog-entries">
                <div className="public__blog-entries-head">
                    <div className="public__blog-entries-head-cont">
                        <div className="public__blog-entries-head-txt">
                            <h1>Blog <i className="fas fa-angle-right"></i> { publicActiveEntry && publicActiveEntry.title}</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="public__entry-content-container">
                { publicActiveEntry && ReactHtmlParser(publicActiveEntry.content) }
            </div>
        </>
    )
}
