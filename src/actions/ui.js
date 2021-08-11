//*******************Actions ui ******************* */


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