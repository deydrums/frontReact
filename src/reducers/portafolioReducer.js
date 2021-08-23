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
        case types.portafolioSetActiveProject:
            return {
                ...state,
                activeProject: action.payload,
            }

        case types.portafolioUnsetActiveProject:
            return {
                ...state,
                activeProject: initialState.activeProject
            }

        case types.portafolioUpdateProject:
            return {
                ...state,
                projects: state.projects.map(
                    project => project.id === action.payload.project.id 
                        ? action.payload.project
                        : project
                )
            }
        default:
            return state;
    }
}