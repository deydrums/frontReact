//******************* userReducer ******************* */


import { types } from "../types/types";


const initialState = {
    users: [],
    pagination: {
        current: '',
        prev: '',
        next: '',
        total: '',
    }
}

export const userReducer = (state = initialState, action) => {
    switch (action.type) {

        case types.userLoadingUsers:
            return{
                ...state,
                users: [...action.payload]
            }
        case types.userSetPagination:
            return{
                ...state,
                pagination: action.payload
            }
        case types.userUnSetUsers:
            return{
                ...state,
                users: initialState.users
            }    

        case types.userUnSetPagination:
            return{
                ...state,
                pagination: initialState.pagination
            }    

        default:
            return state;
    }
}