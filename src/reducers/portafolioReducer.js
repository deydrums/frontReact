//******************* projectReducer ******************* */


import { types } from "../types/types";


const initialState = {
    projects: [],
    activeProject: null,
    publicActiveProject:null,
}

export const portafolioReducer = (state = initialState, action) => {
    switch (action.type) {
        
        case types.portafolioLoadingProjects:
            return {
                ...state,
                projects: action.payload,
            }

        case types.portafolioDeleteProject:
            return {
                ...state,
                projects: state.projects.filter(project=>project.id !== action.payload)
            }

        default:
            return state;
    }
}