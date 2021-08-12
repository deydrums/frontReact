//******************* userReducer ******************* */


import { types } from "../types/types";


const initialState = {
    users: [],
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

        case types.userUpdateUser:
            return {
                ...state,
                users: state.users.map(
                    user => user.id === action.payload.id 
                        ? action.payload.user
                        : user
                )
            }
        default:
            return state;
    }
}