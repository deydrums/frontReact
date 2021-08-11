//******************* blogReducer ******************* */


import { types } from "../types/types";


const initialState = {
    entries: [],
    activeEntry: null
}

export const blogReducer = (state = initialState, action) => {
    switch (action.type) {
        
        case types.blogLoadingEntries:
            return {
                ...state,
                entries: action.payload,
            }

        case types.blogSetActiveEntry:
            return {
                ...state,
                activeEntry: action.payload,
            }

        case types.blogUnsetActiveEntry:
            return {
                ...state,
                activeEntry: initialState.activeEntry
            }

        default:
            return state;
    }
}