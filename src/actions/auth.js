import { types } from "../types/types";
import Swal from 'sweetalert2';
import { fetchWithoutToken, fetchWithToken } from "../helpers/fetch";
import { Redirect } from "react-router-dom";

//Login 

export const startLogin = (email, password) => {
    return async(dispatch) => {
        dispatch(startFetch());
        const resp = await fetchWithoutToken('login',{email,password},'POST');
        const body = await resp.json();
        dispatch(finishFetch());
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
        dispatch(startFetch());
        const resp = await fetchWithoutToken('register',{name,email,password, password_confirmation},'POST');
        const body = await resp.json();
        dispatch(finishFetch());
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

//Cheking token

export const startChecking = () => {
    return async(dispatch) => {
        const resp = await fetchWithToken('renew', '','POST');
        const body = await resp.json();
        if(resp.ok) {
            localStorage.setItem('token',body.token);
            localStorage.setItem('token-init-date', new Date().getTime());
            dispatch(login({
                uid: body.uid,
                name: body.name
            }));
        }else{
            dispatch(checkingFinish());
        }
    }
};

const checkingFinish = () => ({
    type: types.authCheckingFinish
});

//Logout

export const startLogout = () => {
    return async(dispatch) => {
        const resp = await fetchWithToken('logout','','GET');
        const body = await resp.json();
        console.log(body);
        localStorage.clear();
        dispatch(logout());
    }
};

const logout = () => ({
    type: types.authLogout
});


//Recuperar contraseña notificacion

export const forgotPassword = (email, password) => {
    return async(dispatch) => {
        dispatch(startFetch());
        const resp = await fetchWithoutToken('forgot-password',{email},'POST');
        const body = await resp.json();
        if(resp.ok) {
            dispatch(finishFetch());
            Swal.fire('Hecho',body.message,'success');
        }else{
            dispatch(finishFetch());
            Swal.fire('Error',body.message?body.message:'Ha ocurrido un error','error');
        }
    }
}

//Reset contraseña

export const resetPassword = (email, password,password_confirmation, token) => {
    return async(dispatch) => {
        dispatch(startFetch());
        const resp = await fetchWithoutToken('reset-password',{email, password,password_confirmation, token},'POST');
        const body = await resp.json();
        if(resp.ok) {
            dispatch(finishFetch());
            Swal.fire('Hecho',body.message,'success');
        }else{
            dispatch(finishFetch());
            Swal.fire('Error',body.message?body.message:'Ha ocurrido un error','error');
        }
    }
}

//Fetch

const startFetch = () =>({
    type: types.uiSetFetch
});

const finishFetch = () =>({
    type: types.uiRemoveFetch
});