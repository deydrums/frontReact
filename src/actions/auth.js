import { types } from "../types/types";
import Swal from 'sweetalert2';
import { fetchWithoutToken } from "../helpers/fetch";

//Login 

export const startLogin = (email, password) => {
    return async(dispatch) => {
        const resp = await fetchWithoutToken('login',{email,password},'POST');
        const body = await resp.json();
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

//Register

export const startRegister = (name, email, password, password_confirmation) => {
    return async(dispatch) => {
        const resp = await fetchWithoutToken('register',{name,email,password, password_confirmation},'POST');
        const body = await resp.json();
        if(resp.ok) {
            localStorage.setItem('token',body.token);
            localStorage.setItem('token-init-date', new Date().getTime());
            dispatch(login({
                uid: body.uid,
                name: body.name
            }));
        }else{
            if(body.errors.email){
                Swal.fire('Error',body.errors.email[0],'error');
            }else{
                Swal.fire('Error',body.message?body.message:'Ha ocurrido un error','error');
            }
        }
    }
}