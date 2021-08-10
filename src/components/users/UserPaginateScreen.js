import React from 'react'

export const UserPaginateScreen = () => {
    return (
        <div className='__pagination'>
            <div className='paginate__buttons'>1</div>
            <div className='paginate__buttons paginate__buttons_prevnext pointer'><i className="fas fa-arrow-circle-left "></i></div>
            <div className='paginate__buttons'>2</div>
            <div className='paginate__buttons paginate__buttons_prevnext pointer'><i className="fas fa-arrow-circle-right "></i></div>
            <div className='paginate__buttons'>10</div>
        </div>
    )
}
