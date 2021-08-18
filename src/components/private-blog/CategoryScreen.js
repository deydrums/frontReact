import React from 'react';
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2';
import { startDeleteCategory, startUpdateCategory } from '../../actions/blog';

export const CategoryScreen = (category) => {
    const dispatch = useDispatch();

    const handleDeleteCategoryClick = () => {
        Swal.fire({
            title: '¿Quieres eliminar esta categoría?',
            text: "Se eliminarán las entradas relacionadas a esta categoría",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Eliminar'
          }).then((result) => {
            if (result.isConfirmed) {
              dispatch(startDeleteCategory(category.id));
            }
          })
    }

    const handleUpdateCategoryClick = () => {
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
        <div className="blog__content__entry animate__animated animate__zoomIn"> 
            <div className="blog__content__color">
                 <i className="fas fa-neuter"/>
            </div>
            <div className="blog__content__entry-data">
                <div className="blog__content__entry-data-txt">
                    {category.name}
                </div>
            </div>
            <div className="blog__content__date">
                <div className="blog__content_catop pointer" onClick={handleUpdateCategoryClick} ><i className="fas fa-edit"></i></div>
                <div className="blog__content_catop pointer" onClick={handleDeleteCategoryClick} ><i className="fas fa-trash-alt"></i></div>
            </div>
        </div>
    )
}
