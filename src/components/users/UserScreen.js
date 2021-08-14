import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import { setAdmin } from '../../actions/auth';
import {fetchWithToken } from '../../helpers/fetch';

const baseUrl = process.env.REACT_APP_API_URL;

export const UserScreen = (user) => {
    //useSelector hook
    const {role,uid} = useSelector(state => state.auth)

    //dispatch hook
    const dispatch = useDispatch();

    //useEffect hook (changes user.role)
    useEffect(() => {
        if(user.role === '_ADMIN'){
            setState(true)
        }else{
            setState(false)
        }
    }, [user.role])

    //useState hook (checkbox checked)
    let initialState = false;
    const [check, setState] = useState(initialState);


    //HandleChange 
    const handleChange = () =>{
 
        Swal.fire({
            title: 'Confirma tu contraseña',
            input: 'password',
            inputAttributes: {
              autocapitalize: 'off'
            },
            showCancelButton: true,
            confirmButtonText: 'Confirmar',
            cancelButtonText: 'Cancelar',
            showLoaderOnConfirm: true,
            backdrop: true,
            preConfirm: async(password) => {
                if (!password || password.length <= 7) {
                    Swal.showValidationMessage(
                      'La contraseña debe de ser mayor a 8 caracteres'
                    )
                    return false;
                }
                const resp = await fetchWithToken(`confirm-password`,{password},'POST');
                const body = await resp.json();
                if(!resp.ok){
                    if(body.errors.password){
                        Swal.fire('Error',body.errors.password[0],'error');
                    }else{
                        Swal.fire('Error',body.message?body.message:'Ha ocurrido un error','error');
                    }
                }
              return true
            },
            allowOutsideClick: () => !Swal.isLoading()
          }).then((result) => {
            if (result.isConfirmed) {
                dispatch(setAdmin(user.id,!check));
            }
          })                    
    }

    return (
        <div className="users__content__user" data-aos="zoom-in">
            <div className="users__content__userphoto">
                {
                    user.image
                    ?
                        <img src={`${baseUrl}/user/avatar/${user.image.replace('.','/')}`} alt="user"></img>
                    :
                        <img src='https://i.stack.imgur.com/34AD2.jpg' alt="user"></img>    
                }
            </div>
            <div className="users__content__username">
                <h3>{user.name}</h3>
            </div>
            <div className="users__content__role">
                {
                    user.role === '_ADMIN'
                    ?
                    <i className="fas fa-user-shield"></i>
                    :
                    <i className="fas fa-user"></i>
                }
                {
                    (role === '_ADMIN' && user.id !== uid)&&
                    <label className="switch">
                        <input type="checkbox" onChange = {handleChange} name='role' checked={check}/>
                        <span className="slider round"></span>
                    </label>
                }
            </div>
        </div>
    )
}
