import React from 'react'

export const EntriesScreen = () => {
    return (
        <div className="principal__content">
            <div className="blog__content ">
                <div className="blog__text">
                    <h3 className="principal__title"><i className="fab fa-microblog m-2"></i> Blog</h3>
                </div>
                <div className="container_content w-90">
                    <div className="blog__new-entry">
                        <h5 className="principal__title_secundary"><i className="fas fa-file-alt m-2"></i> Entradas</h5>
                    </div>
                    <div className="blog__entries">

                    </div>
                </div>
            </div>
        </div>
    )
}
