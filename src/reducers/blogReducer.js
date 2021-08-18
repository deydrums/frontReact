//******************* blogReducer ******************* */


import { types } from "../types/types";


const initialState = {
    entries: [],
    categories: [],
    activeEntry: null,
    publicActiveEntry:null,
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

        case types.blogDeleteEntry:
            return {
                ...state,
                entries: state.entries.filter(entry=>entry.id !== action.payload)
            }

        case types.blogUpdateEntry:
            return {
                ...state,
                entries: state.entries.map(
                    entry => entry.id === action.payload.entry.id 
                        ? action.payload.entry
                        : entry
                )
            }

        case types.blogLoadingCategories:
            return {
                ...state,
                categories: action.payload,
            }

        case types.blogUpdateCategory:
            return {
                ...state,
                categories: state.categories.map(
                    category => category.id === action.payload.category.id 
                        ? action.payload.category
                        : category
                )
            }

        case types.blogDeleteCategory:
            return {
                ...state,
                categories: state.categories.filter(category=>category.id !== action.payload)
            }

        case types.blogSetActivePublicEntry:
            return {
                ...state,
                publicActiveEntry: action.payload,
            }

        case types.blogUnsetActivePublicEntry:
            return {
                ...state,
                publicActiveEntry: initialState.publicActiveEntry
            }

        default:
            return state;
    }
}