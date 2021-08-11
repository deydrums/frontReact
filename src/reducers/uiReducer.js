//******************* uiReducer ******************* */


import { types } from "../types/types";


const initialState = {
    msgError: null,
    fetch: false,
    redirectLogin: false,
    pagination: {
        current: '',
        prev: '',
        next: '',
        total: '',
    },
    modalOpen: false
}

export const uiReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.uiSetError:
            return{
                ...state,
                msgError: action.payload
            }

        case types.uiRemoveError:
            return{
                ...state,
                msgError: null
            }

        case types.uiSetFetch:
            return{
                ...state,
                fetch: true
            }

        case types.uiRemoveFetch:
            return{
                ...state,
                fetch: false
            }

        case types.uiSetRedirectLogin:
            return{
                ...state,
                redirectLogin: true
            }

        case types.uiRemoveRedirectLogin:
            return{
                ...state,
                redirectLogin: false
            }

        case types.uiUnsetPagination:
            return{
                ...state,
                pagination: initialState.pagination
            }    

        case types.uiSetPagination:
            return{
                ...state,
                pagination: action.payload
            }    

        case types.uiOpenModal:
            return{
                ...state,
                modalOpen: true
            }    

        case types.uiCloseModal:
            return{
                ...state,
                modalOpen: false
            }    
        default:
            return state;
    }
}