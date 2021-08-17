import React from 'react';
import {CategoryScreen} from './CategoryScreen';

export const BlogCategoriesScreen = () => {
    return (
        <div className="blog__container__entries">
            <div className="blog__options__entries">
                <h5 className="principal__title_secundary"><i className="fas fa-sitemap m-2"></i> Categorias</h5>
                <button className="btn btn-primary h-100">
                    <span>Nueva Categoria</span>
                </button>
            </div>
            <div className="blog__categories scroll_options ">
                <div className="blog__categories_center">
                    <CategoryScreen/>
                    <CategoryScreen/>
                    <CategoryScreen/>
                </div>
            </div>
        </div>
    )
}
