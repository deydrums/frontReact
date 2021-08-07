import React from 'react'

export const UserScreen = () => {
    return (
        <div className="users__content__user">
            <div className="users__content__userphoto">
                <img src='https://i.stack.imgur.com/34AD2.jpg' alt="user"></img>    
            </div>
            <div className="users__content__username">
                <h3> Nombre Apellido</h3>
            </div>
        </div>
    )
}
