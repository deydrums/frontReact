import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {CategoryScreen} from './CategoryScreen';
import { LoadingIconScreen } from '../ui/LoadingIconScreen';
import Swal from 'sweetalert2';
import { startCreateCategory } from '../../actions/blog';

export const BlogCategoriesScreen = () => {

    const {categories} = useSelector(state => state.blog);
    const {fetch} = useSelector(state => state.ui);
    const dispatch = useDispatch();

    const handleNewCategory = async() =>{

        Swal.fire({
            title: "Nueva categoria",
            text: "Nombre de la categoria:",
            input: 'text',
            showCancelButton: true    ,
            preConfirm: (name) => {
                if (!name || name.length <= 0) {
                    Swal.showValidationMessage(
                      'Introduce un nombre para la categoria'
                    )
                    return false;
                }
            }    
        }).then((result) => {
            if (result.value) {
                dispatch(startCreateCategory(result.value));
            }
        });
    }

    return (
        <div className="blog__container__entries">
            <div className="blog__options__entries">
                <h5 className="principal__title_secundary"><i className="fas fa-sitemap m-2"></i> Categorias</h5>
                <button className="btn btn-primary h-100" onClick ={handleNewCategory}>
                    <span>Nueva</span>
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
