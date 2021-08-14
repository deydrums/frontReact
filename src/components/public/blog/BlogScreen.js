import React from 'react';
import { AboutUs } from '../AboutUs';
import { useDispatch } from 'react-redux';
import { startGetEntries } from '../../../actions/blog';
import { HeaderBlog } from './HeaderBlog';

export const BlogScreen = () => {
    const dispatch = useDispatch();
    dispatch(startGetEntries());

    return (
        <>
        <HeaderBlog/>
        <AboutUs/>
        </>
    )
}
