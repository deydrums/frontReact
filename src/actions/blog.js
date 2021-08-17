import Swal from "sweetalert2";
import { fetchWithoutToken, fetchWithToken } from "../helpers/fetch";
import { types } from "../types/types";
import { closeModal, finishFetch, setPagination, startFetch } from "./ui";

//create entry ___________________________________________________________________________
export const startCreateEntry = (title, content, reset) => {
    return async(dispatch) => {
        dispatch(startFetch());
        const resp = await fetchWithToken('entry/create-entry',{title,content},'POST');
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
    const {title, content} = entry;
    return async(dispatch) => {
        dispatch(startFetch());
        const resp = await fetchWithToken(`entry/update-entry/${id}`,{title,content},'PUT');
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
        dispatch(startFetch());
        const resp = await fetchWithToken('category/create-category',{name},'POST');
        const body = await resp.json();
        dispatch(finishFetch());
        if(resp.ok) {
            Swal.fire('Hecho',body.message,'success');
            dispatch(startGetCategories());
        }else{
            Swal.fire('Error',body.message?body.message:'Ha ocurrido un error','error');
        }
    }
};




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

export const updateEntry = (id, entry) => ({
    type: types.blogUpdateEntry,
    payload: {
        id, 
        entry: {
            id,
            ...entry
        }
    }
});