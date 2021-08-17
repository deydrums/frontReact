import React from 'react';

export const CategoryScreen = (category) => {


    return (
        <div className="blog__content__entry pointer animate__animated animate__zoomIn"> 
            <div className="blog__content__color">
                 <i className="fas fa-neuter"/>
            </div>
            <div className="blog__content__entry-data">
                <div className="blog__content__entry-data-txt">
                    {category.name}
                </div>
            </div>
            <div className="blog__content__date">

            </div>
        </div>
    )
}
