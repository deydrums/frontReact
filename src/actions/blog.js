import Swal from "sweetalert2";
import { fetchWithoutToken, fetchWithToken, fileUpload } from "../helpers/fetch";
import { types } from "../types/types";
import { closeModal, finishFetch, setPagination, startFetch } from "./ui";

//create entry ___________________________________________________________________________
export const startCreateEntry = ({title, content, category_id}) => {
    return async(dispatch) => {
        dispatch(startFetch());
        const resp = await fetchWithToken('entry/create-entry',{title,content,category_id},'POST');
        const body = await resp.json();
        dispatch(finishFetch());
        if(resp.ok) {
            Swal.fire('Hecho',body.message,'success');
            dispatch(startGetEntries());
            dispatch(closeModal());
            dispatch(unsetActiveEntry());
        }else{
            Swal.fire('Error',body.message?body.message:'Ha ocurrido un error','error');
        }
    }
};

//get entries ___________________________________________________________________________
export const startGetEntries = (page = 1) => {
    return async(dispatch) => {
        dispatch(startFetch());
        const resp = await fetchWithToken(`entry/get-entries?page=${page}`);
        const body = await resp.json();
        dispatch(finishFetch());
        if(resp.ok) {
            const {data:entries} = body.entries;
            const pagination = ({
                'total': body.entries.last_page,
                'current': body.entries.current_page,
                'prev' : !body.entries.links[0].url?null:parseInt(body.entries.links[0].url.split('=')[1]),
                'next' : (body.entries.current_page < body.entries.last_page)?body.entries.current_page + 1 : null,
                'origin' : 'entries'
            })
            dispatch(setEntries(entries));
            dispatch(setPagination(pagination));
        }else{
            console.log(body.message?body.message:'Ha ocurrido un error');
        }
    }
};

const setEntries = (entries) => ({
    type: types.blogLoadingEntries,
    payload: entries
});

//get entry ___________________________________________________________________________
export const startGetEntry = (id) => {
    return async(dispatch) => {
        dispatch(unsetActivePublicEntry());
        dispatch(startFetch());
        const resp = await fetchWithoutToken(`entry/get-entry/${id}`);
        const body = await resp.json();
        dispatch(finishFetch());
        if(resp.ok) {
            dispatch(setActivePublicEntry(body.entry));
        }
    }
};

export const setActivePublicEntry = (entry) => ({
    type: types.blogSetActivePublicEntry,
    payload: entry
});

export const unsetActivePublicEntry = () => ({
    type: types.blogUnsetActivePublicEntry
});

//delete entry ___________________________________________________________________________
export const startDeleteEntry = (id) => {
    return async(dispatch) => {
        dispatch(startFetch());
        const resp = await fetchWithToken(`entry/delete/${id}`,'','DELETE');
        const body = await resp.json();
        dispatch(finishFetch());
        if(resp.ok) {
            Swal.fire('Hecho',body.message,'success');
            dispatch(closeModal());
            dispatch(unsetActiveEntry());
            dispatch(deleteEntry(id));
        }else{
            Swal.fire('Error',body.message?body.message:'Ha ocurrido un error','error');
        }
    }
};

//create entry ___________________________________________________________________________
export const startUpdateEntry = (id, entry) => {
    const {title, content, category_id} = entry;
    return async(dispatch) => {
        dispatch(startFetch());
        const resp = await fetchWithToken(`entry/update-entry/${id}`,{title,content, category_id},'PUT');
        const body = await resp.json();
        dispatch(finishFetch());
        if(resp.ok) {
            Swal.fire('Hecho',body.message,'success');
            dispatch(updateEntry(id, entry));
            dispatch(setActiveEntry(entry));
        }else{
            Swal.fire('Error',body.message?body.message:'Ha ocurrido un error','error');
        }
    }
};


//get categories ___________________________________________________________________________
export const startGetCategories = () => {
    return async(dispatch) => {
        dispatch(startFetch());
        const resp = await fetchWithoutToken(`category/get-categories`);
        const body = await resp.json();
        dispatch(finishFetch());
        if(resp.ok) {
            const {categories} = body;
            dispatch(setCategories(categories));
        }else{
            console.log(body.message?body.message:'Ha ocurrido un error');
        }
    }
};

const setCategories = (categories) => ({
    type: types.blogLoadingCategories,
    payload: categories
});

//create category ___________________________________________________________________________
export const startCreateCategory = (name) => {
    return async(dispatch) => {
        Swal.fire({ 
            title: 'Guardando...',
            text: 'Espere mientras se crea la categoria,',
            allowOutsideClick: false,
            didOpen: () => {
                Swal.showLoading();
            }
        });
        const resp = await fetchWithToken('category/create-category',{name},'POST');
        const body = await resp.json();
        if(resp.ok) {
            Swal.fire('Hecho',body.message,'success');
            dispatch(startGetCategories());
        }else{
            Swal.fire('Error',body.message?body.message:'Ha ocurrido un error','error');
        }
    }
};

//update category ___________________________________________________________________________
export const startUpdateCategory = (id,name) => {
    return async(dispatch) => {
        Swal.fire({ 
            title: 'Guardando...',
            text: 'Espere mientras se actualiza la categoria,',
            allowOutsideClick: false,
            didOpen: () => {
                Swal.showLoading();
            }
        });
        const resp = await fetchWithToken(`category/update-category/${id}`,{name},'PUT');
        const body = await resp.json();
        if(resp.ok) {
            dispatch(updateCategory(body.category));
            Swal.fire('Hecho',body.message,'success');
        }else{
            Swal.fire('Error',body.message?body.message:'Ha ocurrido un error','error');
        }
    }
};

export const updateCategory = (category) => ({
    type: types.blogUpdateCategory,
    payload: {
        category
    }
});


//delete category ___________________________________________________________________________
export const startDeleteCategory = (id) => {
    return async(dispatch) => {
        Swal.fire({ 
            title: 'Eliminando...',
            text: 'Espere mientras se elimina la entrada,',
            allowOutsideClick: false,
            didOpen: () => {
                Swal.showLoading();
            }
        });
        const resp = await fetchWithToken(`category/delete/${id}`,'','DELETE');
        const body = await resp.json();
        if(resp.ok) {
            Swal.fire('Hecho',body.message,'success');
            dispatch(deleteCategory(id));
        }else{
            Swal.fire('Error',body.message?body.message:'Ha ocurrido un error','error');
        }
    }
};

const deleteCategory = (id) => ({
    type: types.blogDeleteCategory,
    payload: id
});


//get entries with category ___________________________________________________________________________
export const startGetCategory = (category_id, page = 1) => {
    return async(dispatch) => {
        dispatch(startFetch());
        const resp = await fetchWithoutToken(`category/get-category/${category_id}?page=${page}`);
        const body = await resp.json();
        dispatch(finishFetch());
        if(resp.ok) {
            const {data:entries} = body.entries;
            const pagination = ({
                'total': body.entries.last_page,
                'current': body.entries.current_page,
                'prev' : !body.entries.links[0].url?null:parseInt(body.entries.links[0].url.split('=')[1]),
                'next' : (body.entries.current_page < body.entries.last_page)?body.entries.current_page + 1 : null,
                'origin' : 'entries'
            })
            dispatch(setEntries(entries));
            dispatch(setPagination(pagination));
        }else{
            console.log(body.message?body.message:'Ha ocurrido un error');
        }
    }
};


////upload image entry ___________________________________________________________________________

export const startUploadEntry = (id,file) => {
    return async(dispatch) => {
        Swal.fire({ 
            title: 'Cargando...',
            text: 'Espere mientras se carga el archivo,',
            allowOutsideClick: false,
            didOpen: () => {
                Swal.showLoading();
            }
        });
        const resp = await fileUpload(`entry/upload/${id}`,file[0],'POST');
        const body = await resp.json();
        Swal.close();
        if(resp.ok) {
            dispatch(updateEntry(body.entry.id, body.entry));
            dispatch(setActiveEntry(body.entry));
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



export const setActiveEntry = (entry) => ({
    type: types.blogSetActiveEntry,
    payload: entry
});

export const unsetActiveEntry = () => ({
    type: types.blogUnsetActiveEntry
});

export const deleteEntry = (id) => ({
    type: types.blogDeleteEntry,
    payload: id
});

export const updateEntry = (id,entry) => ({
    type: types.blogUpdateEntry,
    payload: {
        entry: {
            id,
            ...entry
        }
    }
});