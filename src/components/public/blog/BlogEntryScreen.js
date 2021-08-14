import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startGetEntry } from '../../../actions/blog';

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
            HOLA
        </>
    )
}
