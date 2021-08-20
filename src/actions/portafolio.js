import { fetchWithoutToken } from "../helpers/fetch";
import { types } from "../types/types";
import { finishFetch, startFetch } from "./ui";


//get entries ___________________________________________________________________________
export const startGetProjects = () => {
    return async(dispatch) => {
        dispatch(startFetch());
        const resp = await fetchWithoutToken('portafolio/get-projects');
        const body = await resp.json();
        dispatch(finishFetch());
        if(resp.ok) {
            const {projects} = body;
            dispatch(setProjects(projects));
        }else{
            console.log(body.message?body.message:'Ha ocurrido un error');
        }
    }
};

const setProjects = (projects) => ({
    type: types.portafolioLoadingProjects,
    payload: projects
});