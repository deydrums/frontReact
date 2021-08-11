import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { startLoadingUsers } from '../../actions/user';
import { UserPaginateScreen } from './UserPaginateScreen';
import { UserScreen } from './UserScreen'

export const UsersListScreen = () => {

    const {users} = useSelector(state => state.user);

    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(startLoadingUsers());
    },[dispatch]);

    return (
        <div className="principal__content">
            <div className="users__content">
                <div className="users__content__text">
                    <h3 className="principal__title"><i className="fas fa-users m-2"></i>Usuarios</h3>
                </div>
                <div className="users__content__users">
                    <div className="users_content_UserScreen">
                        {
                            users.map(user => (
                                <UserScreen 
                                    key={user.id}
                                    {...user}
                                />
                            ))
                        }
                    </div>
                    <div className="users__content__paginate">
                        <UserPaginateScreen/>
                    </div>
                </div>    
            </div>
        </div>
    )
}