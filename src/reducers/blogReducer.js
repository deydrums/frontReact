//******************* blogReducer ******************* */


import { types } from "../types/types";


const initialState = {
    entries: [],
    activeEntry: false
}

export const blogReducer = (state = initialState, action) => {
    switch (action.type) {
        
        case types.blogLoadingEntries:
            return {
                ...state,
                entries: action.payload,
            }

        default:
            return state;
    }
}