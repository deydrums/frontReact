import React from 'react'

const baseUrl = process.env.REACT_APP_API_URL;

export const UserScreen = ({id, name, image}) => {
    return (
        <div className="users__content__user">
            <div className="users__content__userphoto">
                {
                    image
                    ?
                        <img src={`${baseUrl}/user/avatar/${image.replace('.','/')}`} alt="user"></img>
                    :
                        <img src='https://i.stack.imgur.com/34AD2.jpg' alt="user"></img>    
                }
            </div>
            <div className="users__content__username">
                <h3>{name}</h3>
            </div>
        </div>
    )
}
