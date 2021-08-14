import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startGetEntries } from '../../../actions/blog';
import { LoadingIconScreenPrimary } from '../../ui/LoadingIconScreen';
import { PaginateScreen } from '../../ui/PaginateScreen';
import { BlogEntry } from './BlogEntry';
import { HeaderBlog } from './HeaderBlog';

export const BlogScreen = () => {
    const {entries} = useSelector(state => state.blog);
    const {fetch} = useSelector(state => state.ui);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(startGetEntries());
    },[dispatch]);

    return (
        <>
        <HeaderBlog/>
        <div className="public__blog-entries">
            <div className="public__blog-entries-head">
                <div className="public__blog-entries-head-cont">
                    <div className="public__blog-entries-head-txt">
                        <h1>Blog <i className="fas fa-angle-right"></i> Ultimas Entradas</h1>
                    </div>
                </div>
            </div>
            <div className="public__blog-entries-cont">
                {
                    fetch
                    ?
                        <div className="public__blog-entries-load">
                            <LoadingIconScreenPrimary/>
                        </div>
                        

                    :
                        entries.map(entry => (
                            <BlogEntry 
                                key={entry.id}
                                {...entry}
                            />
                        ))
                }
            </div>

            <div className="public__blog-entries-head">
                <div className="public__blog-entries-head-cont">
                    <div className="public__blog-entries-head-paginate">
                        <PaginateScreen/>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
