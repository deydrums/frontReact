import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {CategoryScreen} from './CategoryScreen';
import { LoadingIconScreen } from '../ui/LoadingIconScreen';

export const BlogCategoriesScreen = () => {

    const {categories} = useSelector(state => state.blog);
    const {fetch} = useSelector(state => state.ui);
    const dispatch = useDispatch();

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
                {
                    fetch
                    ?
                    <div className="mt-3">
                        <LoadingIconScreen/>
                    </div>
                    :
                        categories.map(category => (
                            <CategoryScreen 
                                key={category.id}
                                {...category}
                            />
                        ))

                }
                </div>
            </div>
        </div>
    )
}
