import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startGetEntries } from '../../../actions/blog';
import { BlogEntry } from './BlogEntry';
import { HeaderBlog } from './HeaderBlog';

export const BlogScreen = () => {
    const {entries} = useSelector(state => state.blog);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(startGetEntries());
    },[dispatch]);

    return (
        <>
        <HeaderBlog/>
        <div className="public__blog-entries">
            <div className="public__blog-entries-cont">
                {
                    entries.map(entry => (
                        <BlogEntry 
                            key={entry.id}
                            {...entry}
                        />
                    ))
                }
            </div>
        </div>
        </>
    )
}
