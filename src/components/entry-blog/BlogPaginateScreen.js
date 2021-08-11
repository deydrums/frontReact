import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startLoadingUsers } from '../../actions/user';
import { LoadingIconScreen } from '../ui/LoadingIconScreen';

export const BlogPaginateScreen = () => {

    const dispatch = useDispatch();
    const {pagination} = useSelector(state => state.user);
    const {current, next, prev, total} = pagination;

    

    const handlePrevClick = () => {
        if(prev) {
            dispatch(startLoadingUsers(prev));
        }
    }

    const handleNextClick = () => {
        if(next){
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
