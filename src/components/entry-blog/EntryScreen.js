import React from 'react'

export const EntryScreen = ({title,user,content,created_at}) => {
    return (
        <div className="blog__content__entry pointer"> 
            <div className="blog__content__color">

            </div>
            <div className="blog__content__entry-data">
                <h2>{title}</h2>
                <h3>{user.name}</h3>
            </div>
            <div className="blog__content__date">
                <h3>Lunes</h3>
                <h2>25</h2>
                <h3>Dic 2021</h3>
            </div>
        </div>
    )
}
