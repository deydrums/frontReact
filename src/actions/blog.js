import Swal from "sweetalert2";
import { fetchWithToken } from "../helpers/fetch";
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
            reset();
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


const setEntries = (entries) => ({
    type: types.blogLoadingEntries,
    payload: entries
});

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