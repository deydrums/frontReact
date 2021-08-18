import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startGetEntries } from '../../../actions/blog';
import { LoadingIconScreenPrimary } from '../../ui/LoadingIconScreen';
import { PaginateScreen } from '../../ui/PaginateScreen';
import { BlogEntry } from './BlogEntry';

export const BlogScreen = () => {
    const {entries} = useSelector(state => state.blog);
    const {fetch} = useSelector(state => state.ui);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(startGetEntries());
    },[dispatch]);

    return (
        <>
        

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

        </>
    )
}
