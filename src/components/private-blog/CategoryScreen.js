import React from 'react';
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2';
import { startUpdateCategory } from '../../actions/blog';

export const CategoryScreen = (category) => {
    const dispatch = useDispatch();

    const handleCategoryClick = () => {
        Swal.fire({
            title: "Editar categoria",
            text: "Nombre de la categoria:",
            input: 'text',
            showCancelButton: true,
            inputValue: category.name,
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
                dispatch(startUpdateCategory(category.id,result.value));
            }
        });
    }


    return (
        <div className="blog__content__entry pointer animate__animated animate__zoomIn" onClick={handleCategoryClick}> 
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
