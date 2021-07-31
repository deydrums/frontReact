import { types } from "../types/types";
import Swal from 'sweetalert2';
import { fetchWithoutToken } from "../helpers/fetch";

//Login 

export const startLogin = (email, password) => {
    return async(dispatch) => {
        const resp = await fetchWithoutToken('login',{email,password},'POST');
        const body = await resp.json();
        console.log(body);
        if(resp.ok) {
            localStorage.setItem('token',body.token);
            localStorage.setItem('token-init-date', new Date().getTime());
            dispatch(login({
                uid: body.uid,
                name: body.name
            }));
        }else{
            Swal.fire('Error',body.message?body.message:'Ha ocurrido un error','error');
        }
    }
}

const login = (user) => ({
    type: types.authLogin,
    payload: user
});