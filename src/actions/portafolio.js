import Swal from "sweetalert2";
import { fetchWithoutToken, fetchWithToken, fileUpload } from "../helpers/fetch";
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
        Swal.fire({ 
            title: 'Borrando...',
            text: 'Espere mientras se elimina el proyecto,',
            allowOutsideClick: false,
            didOpen: () => {
                Swal.showLoading();
            }
        });
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
        Swal.fire({ 
            title: 'Guardando...',
            text: 'Espere mientras se guarda la el proyecto',
            allowOutsideClick: false,
            didOpen: () => {
                Swal.showLoading();
            }
        });        
        const resp = await fetchWithToken('portafolio/create-project',{name , desc, date, technologies, responsive, role, link},'POST');
        const body = await resp.json();
        if(resp.ok) {
            Swal.fire('Hecho',body.message,'success');
            dispatch(startGetProjects());
        }else{
            Swal.fire('Error',body.message?body.message:'Ha ocurrido un error','error');
        }
    }
};

//update project ___________________________________________________________________________
export const startUpdateProject = (project, id) => {
    const{ name , desc, date, technologies, responsive, role, link } = project;

    return async(dispatch) => {
        Swal.fire({ 
            title: 'Guardando...',
            text: 'Espere mientras se actualiza la categoria,',
            allowOutsideClick: false,
            didOpen: () => {
                Swal.showLoading();
            }
        });
        const resp = await fetchWithToken(`portafolio/update-project/${id}`,{name , desc, date, technologies, responsive, role, link},'PUT');
        const body = await resp.json();
        if(resp.ok) {
            dispatch(updateProject(id, project));
            Swal.fire('Hecho',body.message,'success');
        }else{
            Swal.fire('Error',body.message?body.message:'Ha ocurrido un error','error');
        }
    }
};

export const updateProject = (id,project) => ({
    type: types.portafolioUpdateProject,
    payload: {
        project: {
            id,
            ...project
        }
    }
});

////upload image project ___________________________________________________________________________

export const startUploadProject = (id,file) => {
    return async(dispatch) => {
        Swal.fire({ 
            title: 'Cargando...',
            text: 'Espere mientras se carga el archivo,',
            allowOutsideClick: false,
            didOpen: () => {
                Swal.showLoading();
            }
        });
        const resp = await fileUpload(`portafolio/upload/${id}`,file[0],'POST');
        const body = await resp.json();
        Swal.close();
        if(resp.ok) {
            dispatch(updateProject(body.project.id, body.project));
            dispatch(setActiveProject(body.project));
            Swal.fire('Hecho',body.message,'success');
        }else{
            if(body.errors.file){
                Swal.fire('Error',body.errors.file[0],'error');
            }else{
                Swal.fire('Error',body.message?body.message:'Ha ocurrido un error','error');
            }
        }

    }
}



export const setActiveProject = (project) => ({
    type: types.portafolioSetActiveProject,
    payload: project
});

export const unsetActiveProject = () => ({
    type: types.portafolioUnsetActiveProject
});