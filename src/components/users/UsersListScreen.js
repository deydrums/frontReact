import React from 'react'
import { UserScreen } from './UserScreen'

export const UsersListScreen = () => {
    return (
        <div className="principal__content">
            <div className="users__content">
                <div className="users__content__text">
                    <h3 className="principal__title"><i className="fas fa-users m-2"></i>Usuarios</h3>
                </div>
                <div className="users__content__users">
                   <UserScreen/>
                </div>
            </div>
        </div>
    )
}
