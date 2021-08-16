import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { startUpdate, startUpload } from '../../actions/auth';
import { removeError, setError } from '../../actions/ui';
import { useForm } from '../../hooks/useForm';
import { LoadingIconScreen } from '../ui/LoadingIconScreen';

const baseUrl = process.env.REACT_APP_API_URL;

export const UserSettingsScreen = () => {

    //redux
    const dispatch = useDispatch();
    const {msgError, fetch} = useSelector(state => state.ui);
    const user = useSelector(state => state.auth);
    
    //useEffect hook

    useEffect(() => {
        dispatch(removeError());
    }, [dispatch])

    //useform hook
    const [formValues, handleInputChange] = useForm({
        name: user.name,
    });

    const {name} = formValues;

    const onSubmit = (e) => {
        e.preventDefault();
        if (isFormValid()){
            dispatch(startUpdate(name));
        }
    };

    //form validate
    const isFormValid = () =>{
        if(name.trim().length ===0){
            dispatch(setError('Nombre es requerido'));
            return false;
        }
        dispatch(removeError());
        return true;
    };

    const handlePictureUpload = () => {
        document.querySelector('#fileSelector').click();
    }

    const handleFileChange = (e) => {
        const file = e.target.files;
        if(file){
            dispatch(startUpload(file));
        }
    }




    return (
        <div className="principal__content">
            <h3 className="principal__title"><i className="fas fa-user-cog m-2"></i>Ajustes de usuario</h3>
            {
                msgError&&<div className="auth__alert-error">{msgError}</div>
            }

            <div className="principal__contenttwo">
                <h3 className="principal__title_secundary auth__input"><i className="fas fa-database m-2"></i>Datos de usuario</h3>
                <form onSubmit ={onSubmit} className="m-5 contblock">
                    <input
                        type="text"
                        placeholder="Nombre..."
                        name = "name"
                        className="auth__input"
                        autoComplete="off"
                        onChange={handleInputChange}
                        value={name}
                    />

                    <button
                        type="submit"
                        className = "btn btn-primary btn-block mb-3"
                        disabled={fetch}
                    >
                        {
                            fetch?<LoadingIconScreen/>:<span>Actualizar</span>
                        }
                    </button>
                
                </form>
                <h3 className="principal__title_secundary auth__input"><i className="fas fa-camera m-2"></i>Foto de perfil</h3>
                <div className="principal__userphoto2">
                    <div className="principal__userimg2">
                        {
                            user.avatar
                            ?
                                <img src={`${baseUrl}/user/get-avatar/${user.avatar.replace('.','/')}`} alt="user"></img>
                            :
                                <img src='https://i.stack.imgur.com/34AD2.jpg' alt="user"></img>    
                        }
                        
                    </div>
                </div>

                <button
                    className = "btn btn-primary btn-block mt-5"
                    disabled={fetch}
                    onClick={handlePictureUpload}
                >
                    {
                        fetch?<LoadingIconScreen/>:<span>Subir</span>
                    }
                </button>

                <input
                    type="file"
                    style = {{display:'none'}}
                    onChange={handleFileChange}
                    id = "fileSelector"
                    name = "file"
                    max-size="10000"
                />

            </div>
        </div>
    )
}
