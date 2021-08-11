//*******************Actions auth ******************* */

import { types } from "../types/types";
import Swal from 'sweetalert2';
import { fetchWithoutToken, fetchWithToken, fileUpload } from "../helpers/fetch";
import { finishFetch, startFetch, startRedirectLogin, unsetPagination } from "./ui";
import { unsetUsers } from "./user";

//login ___________________________________________________________________________

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
                name: body.name,
                email_verified_at: body.email_verified_at,
                avatar: body.filename,
                role: body.role
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

//register ___________________________________________________________________________

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
                name: body.name,
                email_verified_at: body.email_verified_at,
                role: body.role
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

//checking token ___________________________________________________________________________

export const startChecking = () => {
    return async(dispatch) => {
        const resp = await fetchWithToken('renew', '','POST');
        const body = await resp.json();
        if(resp.ok) {
            localStorage.setItem('token',body.token);
            localStorage.setItem('token-init-date', new Date().getTime());
            dispatch(login({
                uid: body.uid,
                name: body.name,
                email_verified_at: body.email_verified_at,
                avatar: body.filename,
                role: body.role
            }));
        }else{
            dispatch(checkingFinish());
        }
    }
};

const checkingFinish = () => ({
    type: types.authCheckingFinish
});

//Logout ___________________________________________________________________________

export const startLogout = () => {
    return async(dispatch) => {
        await fetchWithToken('logout','','GET');
        localStorage.clear();
        dispatch(logout());
        dispatch(unsetPagination());
        dispatch(unsetUsers());
    }
};

const logout = () => ({
    type: types.authLogout
});


//forgot password ___________________________________________________________________________

export const forgotPassword = (email) => {
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

//reset password ___________________________________________________________________________

export const resetPassword = (email, password,password_confirmation, token) => {
    return async(dispatch) => {
        dispatch(startFetch());
        const resp = await fetchWithoutToken('reset-password',{email, password,password_confirmation, token},'POST');
        const body = await resp.json();
        if(resp.ok) {
            dispatch(finishFetch());
            Swal.fire('Hecho',body.message,'success');
            dispatch(startRedirectLogin());
        }else{
            dispatch(finishFetch());
            if(body.errors.email){
                Swal.fire('Error','El email no es correcto','error');
            }else if(body.errors.token){
                Swal.fire({
                    title: 'El token ha expirado',
                    text: 'Solicita un nuevo correo de recuperacion',
                    showCancelButton: true,
                    confirmButtonText: `Solicitar otro correo`,
                    denyButtonText: `Cancelar`,
                  }).then((result) => {
                    if (result.isConfirmed) {
                      dispatch(forgotPassword(email));
                    }else if (result.isDismissed) {
                      dispatch(startRedirectLogin());
                    }
                    
                  })

            }else{
                Swal.fire('Error',body.message?body.message:'Ha ocurrido un error','error');
            }
        }
    }
}

////update user ___________________________________________________________________________



export const startUpdate = (name) => {
    return async(dispatch) => {
        dispatch(startFetch());
        const resp = await fetchWithToken('update',{name},'PUT');
        const body = await resp.json();
        dispatch(finishFetch());
        if(resp.ok) {
            dispatch(login({
                name: name,
            }));
            Swal.fire('Hecho',body.message,'success');
        }else{
            Swal.fire('Error',body.message,'error');
        }
    }
}

////upload image user ___________________________________________________________________________



export const startUpload = (file) => {
    return async(dispatch) => {
        dispatch(startFetch());
        Swal.fire({ 
            title: 'Cargando...',
            text: 'Espere mientras se carga el archivo,',
            allowOutsideClick: false,
            didOpen: () => {
                Swal.showLoading();
            }
        });
        const resp = await fileUpload('upload',file[0],'POST');
        const body = await resp.json();
        dispatch(finishFetch());
        Swal.close();
        if(resp.ok) {
            dispatch(login({
                avatar: body.filename,
            }));
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

//sendconfirm email ___________________________________________________________________________
export const startConfirmEmail = () => {
    return async(dispatch) => {
        dispatch(startFetch());
        const resp = await fetchWithToken('email/verification-notification','','POST');
        const body = await resp.json();
        dispatch(finishFetch());
        if(resp.ok) {
            dispatch(startChecking());
            Swal.fire('Hecho',body.message,'success');
        }else{
            Swal.fire('Error',body.message?body.message:'Ha ocurrido un error','error');
        }
    }
};