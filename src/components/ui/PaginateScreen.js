import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startGetEntries } from '../../actions/blog';
import { startLoadingUsers } from '../../actions/user';
import { LoadingIconScreen } from './LoadingIconScreen';

export const PaginateScreen = () => {

    const dispatch = useDispatch();
    const {pagination} = useSelector(state => state.ui);
    const {current, next, prev, total, origin} = pagination;

    

    const handlePrevClick = () => {
        window.scrollTo({ top: 220, behavior: 'smooth' });
        if(prev && origin === 'entries') {
            dispatch(startGetEntries(prev));
        }else if(prev && origin === 'users') {
            dispatch(startLoadingUsers(prev));
        }
    }

    const handleNextClick = () => {
        window.scrollTo({ top: 220, behavior: 'smooth' });
        if(next && origin === 'entries'){
            dispatch(startGetEntries(next));
        }else if(next && origin === 'users') {
            dispatch(startLoadingUsers(next));
        }
    }
    return (
        <div className='__pagination'>
            {
                current
                ?
                <>
                <div className='paginate__buttons'>1</div>
                <div className='paginate__buttons paginate__buttons_prevnext pointer' onClick={handlePrevClick}><i className="fas fa-arrow-circle-left "></i></div>
                <div className='paginate__buttons'>{current&&current}</div>
                <div className='paginate__buttons paginate__buttons_prevnext pointer' onClick={handleNextClick}><i className="fas fa-arrow-circle-right "></i></div>
                <div className='paginate__buttons'>{total&&total}</div>
                </>
                :
                <LoadingIconScreen/>
            }

        </div>
    )
}
