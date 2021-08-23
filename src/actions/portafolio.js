import Swal from "sweetalert2";
import { fetchWithoutToken, fetchWithToken } from "../helpers/fetch";
import { types } from "../types/types";
import { finishFetch, startFetch } from "./ui";


//get projects ___________________________________________________________________________
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

//delete project ___________________________________________________________________________

export const startDeleteProject = (id) => {
    return async(dispatch) => {
        const resp = await fetchWithToken(`portafolio/delete/${id}`,'','DELETE');
        const body = await resp.json();
        if(resp.ok) {
            Swal.fire('Hecho',body.message,'success');
            dispatch(deleteProject(id));
        }else{
            Swal.fire('Error',body.message?body.message:'Ha ocurrido un error','error');
        }
    }
};

const deleteProject = (id) => ({
    type: types.portafolioDeleteProject,
    payload: id
});


//create project ___________________________________________________________________________
export const startCreateProject = (project) => {
    const{ name , desc, date, technologies, responsive, role, link } = project;

    return async(dispatch) => {
        dispatch(startFetch());
        const resp = await fetchWithToken('portafolio/create-project',{name , desc, date, technologies, responsive, role, link},'POST');
        const body = await resp.json();
        dispatch(finishFetch());
        if(resp.ok) {
            Swal.fire('Hecho',body.message,'success');
            dispatch(startGetProjects());
        }else{
            Swal.fire('Error',body.message?body.message:'Ha ocurrido un error','error');
        }
    }
};
