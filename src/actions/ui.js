//*******************Actions ui ******************* */


import Swal from "sweetalert2";
import { fetchWithoutToken } from "../helpers/fetch";
import { types } from "../types/types";

//errors msg ___________________________________________________________________________

export const setError = (err) => ({
    type: types.uiSetError,
    payload: err
});

export const removeError = () => ({
    type: types.uiRemoveError
});

//fetch ___________________________________________________________________________

export const startFetch = () =>({
    type: types.uiSetFetch
});

export const finishFetch = () =>({
    type: types.uiRemoveFetch
});

//redirect ___________________________________________________________________________

export const startRedirectLogin = () =>({
    type: types.uiSetRedirectLogin
});

export const finishRedirectLogin = () =>({
    type: types.uiRemoveRedirectLogin
});

//Pagination ___________________________________________________________________________

export const setPagination = (pagination) => ({
    type: types.uiSetPagination,
    payload: pagination
});

export const unsetPagination = () => ({
    type: types.uiUnsetPagination
});

//Modal ___________________________________________________________________________

export const openModal = () => ({
    type: types.uiOpenModal
});

export const closeModal = () => ({
    type: types.uiCloseModal
});

// Contact Email ___________________________________________________________________________

export const startContactEmail = (user,reset) => {
    const {name, email, message} = user;
    return async(dispatch) => {
        dispatch(startFetch());
        const resp = await fetchWithoutToken('ui/send-contactEmail',{name,email,message},'POST');
        const body = await resp.json();
        dispatch(finishFetch());
        if(resp.ok) {
            Swal.fire('Hecho',body.message,'success');
            reset();
        }else{
            if(body.errors.email){
                Swal.fire('Error',body.errors.email[0],'error');
            }else{
                Swal.fire('Error',body.message?body.message:'Ha ocurrido un error','error');
            }
        }
    }
}