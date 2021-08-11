import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { startLoadingUsers } from '../../actions/user';
import { LoadingIconScreen } from '../ui/LoadingIconScreen';
import { PaginateScreen } from '../ui/PaginateScreen';
import { UserScreen } from './UserScreen'

export const UsersListScreen = () => {

    const {users} = useSelector(state => state.user);
    const {fetch} = useSelector(state => state.ui);

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
                <div className="container_content">
                    <div className="users_content_UserScreen">
                        {
                            fetch
                            ?
                            <div className="mt-5">
                                <LoadingIconScreen/>
                            </div>
                            :
                                users.map(user => (
                                    <UserScreen 
                                        key={user.id}
                                        {...user}
                                    />
                                ))
                        }
                    </div>
                    <div className="users__content__paginate">
                        <PaginateScreen/>
                    </div>
                </div>    
            </div>
        </div>
    )
}
