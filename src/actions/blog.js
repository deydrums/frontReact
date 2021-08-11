import Swal from "sweetalert2";
import { fetchWithToken } from "../helpers/fetch";
import { types } from "../types/types";
import { finishFetch, startFetch } from "./ui";

//create entry ___________________________________________________________________________
export const startCreateEntry = (title, content, reset) => {
    return async(dispatch) => {
        dispatch(startFetch());
        const resp = await fetchWithToken('create-entry',{title,content},'POST');
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
export const startGetEntries = () => {
    return async(dispatch) => {
        dispatch(startFetch());
        const resp = await fetchWithToken('get-entries');
        const body = await resp.json();
        dispatch(finishFetch());
        if(resp.ok) {
            const {entries} = body;
            dispatch(setEntries(entries));
        }else{
            console.log(body.message?body.message:'Ha ocurrido un error');
        }
    }
};

const setEntries = (entries) => ({
    type: types.blogLoadingEntries,
    payload: entries
});

