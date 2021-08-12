import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2';
import { setAdmin } from '../../actions/auth';
import {fetchWithToken } from '../../helpers/fetch';

const baseUrl = process.env.REACT_APP_API_URL;

export const UserScreen = (user) => {
    const dispatch = useDispatch();

    useEffect(() => {
        if(user.role === '_ADMIN'){
            setState(true)
        }else{
            setState(false)
        }
    }, [user.role])

    
    let initialState = false;
    const [check, setState] = useState(initialState);


    const handleChange = () =>{
 
        Swal.fire({
            title: 'Confirma tu contraseña',
            input: 'password',
            inputAttributes: {
              autocapitalize: 'off'
            },
            showCancelButton: true,
            confirmButtonText: 'Confirmar',
            showLoaderOnConfirm: true,
            preConfirm: async(password) => {
                if (!password || password.length <= 7) {
                    Swal.showValidationMessage(
                      'La contraseña debe de ser mayor a 8 caracteres'
                    )
                    return false;
                }
                const resp = await fetchWithToken(`confirm-password`,{password},'POST');
                const body = await resp.json();
                console.log(body)
                if(resp.ok){
                    return true
                }
              return false
            },
            allowOutsideClick: () => !Swal.isLoading()
          }).then((result) => {
            if (result.isConfirmed) {
                dispatch(setAdmin(user.id,!check));
            }
          })                    
    }

    return (
        <div className="users__content__user">
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
                <label className="switch">
                    <input type="checkbox" onChange = {handleChange} name='role' checked={check}/>
                    <span className="slider round"></span>
                </label>
            </div>
        </div>
    )
}
