import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startGetEntry } from '../../../actions/blog';
import ReactHtmlParser from 'react-html-parser';
import { LoadingIconScreenPrimary } from '../../ui/LoadingIconScreen';
import { images } from '../../../helpers/getImages';

export const BlogEntryScreen = ({match}) => {

    const {publicActiveEntry} = useSelector(state => state.blog);
    const {fetch} = useSelector(state => state.ui);

    const {id} = match.params;

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(startGetEntry(id));
        window.scrollTo({ top: 220, behavior: 'smooth' });
    },[dispatch, id])

    return (
        <>
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
