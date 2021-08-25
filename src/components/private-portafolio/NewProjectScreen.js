import React, {useEffect} from 'react';
import { useForm } from '../../hooks/useForm';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal, removeError, setError } from '../../actions/ui';
import { LoadingIconScreen } from '../ui/LoadingIconScreen';
import { startCreateProject, startUpdateProject, startUploadProject, unsetActiveProject } from '../../actions/portafolio';


const baseUrl = process.env.REACT_APP_API_URL;


export const NewProjectScreen = () => {
    
    //redux
    const dispatch = useDispatch();
    const {msgError, fetch} = useSelector(state => state.ui);
    const {activeProject} = useSelector(state => state.portafolio)
   
    //useEffect hook
    useEffect(() => {
        dispatch(removeError());
    }, [dispatch])

    //useForm customHook
    const [values, handleInputChange, reset, setValues] = useForm({
        name:"",
        desc:"",
        date: "",
        technologies: "",
        responsive: "",
        role : "",
        link: ""
    });
	
    const{ name, desc, date, technologies, responsive, role, link} = values;

    //Cargar valores
    useEffect(() => {
        if(activeProject) {
            setValues(activeProject);
        }
    }, [activeProject,setValues]);


    //Submit
    const handleSubmit = (e) => {
        e.preventDefault();
        if(isFormValid()){
            if(activeProject){
                dispatch(startUpdateProject(values, activeProject.id));
            }else{
                dispatch(startCreateProject(values));
            }
        }
    }

    //form validate
    const isFormValid = () =>{

        if(name.trim().length ===0){
            dispatch(setError('El nombre es requerido'));
            return false;
        }else if(desc.trim().length ===0){
            dispatch(setError('La descripcion es requerida'));
            return false;
        }else if(technologies.trim().length ===0){
            dispatch(setError('Las tecnologias son requeridas'));
            return false;
        }else if(responsive.trim().length ===0){
            dispatch(setError('El campo responsive es requerido'));
            return false;
        }else if(role.trim().length ===0){
            dispatch(setError('El role es requerido'));
            return false;
        }else if(link.trim().length ===0){
            dispatch(setError('El link es requerido'));
            return false;
        }else if(date.trim().length ===0){
            dispatch(setError('La fecha es requerida'));
            return false;
        }

        dispatch(removeError());
        return true;
    };

    //TextArea Ajust
    const adjustHeight = (e) => {
        e.target.style.height = 'inherit';
        e.target.style.height = `${e.target.scrollHeight}px`; 
    }

    //Close button

    const handleCloseClick = () => {
        dispatch(closeModal());
        dispatch(unsetActiveProject());
        reset();
    }


    //uploadimg
    const handlePictureUpload = () => {
        document.querySelector('#fileProjectSelector').click();
    }

    const handleFileChange = (e) => {
        const file = e.target.files;
        if(file){
            dispatch(startUploadProject(activeProject.id,file));
        }
    }


    return (
        <div className="portafolio__newproject-content">
            
            <div className="portafolio__newproject-buttons">
                <div className="portafolio__newproject-buttons-cont">
                    <button className="btn btn-close" style={{margin: '0'}} onClick={handleCloseClick} disabled={fetch}>
                        <i className="fas fa-times"></i>
                    </button>
                </div>
            </div>
            <div className="portafolio__newproject-text">
                {
                    activeProject
                    ?
                    <h2>Editar Proyecto</h2>
                    :
                    <h2>Nuevo Proyecto</h2>
                }
                
            </div>



            <form className="portafolio__newproject-form" >

                    <div className="portafolio__newproject-msgs">
                        {
                            msgError&&<div className="auth__alert-error">{msgError}</div>
                        }
                    </div>

                    <input
                        type="text"
                        placeholder="Nombre..."
                        name = "name"
                        className="auth__input"
                        autoComplete="off"
                        value={name}
                        onChange = {handleInputChange}
                    />

                    <textarea
                        placeholder="Descripcion del proyecto..."
                        name = "desc"
                        className="auth__input portafolio__newproject-textarea"
                        autoComplete="off"
                        value={desc}
                        onChange = {handleInputChange}
                        onKeyDown={adjustHeight}
                    >

                    </textarea>

                    <input
                        type="text"
                        placeholder="Tecnologías..."
                        name = "technologies"
                        className="auth__input"
                        autoComplete="off"
                        value={technologies}
                        onChange = {handleInputChange}
                    />

                    <input
                        type="text"
                        placeholder="Responsive..."
                        name = "responsive"
                        className="auth__input"
                        autoComplete="off"
                        value={responsive}
                        onChange = {handleInputChange}
                    />

                    <input
                        type="text"
                        placeholder="Role..."
                        name = "role"
                        className="auth__input"
                        autoComplete="off"
                        value={role}
                        onChange = {handleInputChange}
                    />

                    <input
                        type="text"
                        placeholder="Link..."
                        name = "link"
                        className="auth__input"
                        autoComplete="off"
                        value={link}
                        onChange = {handleInputChange}
                    />


                    <input
                        type="date"
                        placeholder="Date..."
                        name = "date"
                        className="auth__input"
                        autoComplete="off"
                        value={date}
                        onChange = {handleInputChange}
                    />

            </form>
                {
                    activeProject
                    &&
                    <>
                    <button className="btn btn-upload mb-1" onClick = {handlePictureUpload} disabled={fetch}>
                        <i className="fas fa-cloud-upload-alt"/> Subir imagen
                    </button>

                    {
                        activeProject.image&&
                        <>
                            <div className="blog__text">
                                <h3 className="principal__title"><i className="fas fa-image m-2"></i> Imagen</h3>
                            </div>

                            <div 
                                className="blog__image"
                            >
                                <img src={`${baseUrl}/portafolio/get-image/${activeProject.image.replace('.','/')}`} alt="user"></img>
                            </div>
                        </>

                    }

                    </>
                }



            <div className="portafolio__btn_guardar pointer" onClick={handleSubmit} disabled={fetch}>
                {
                    fetch?<LoadingIconScreen/>:<span>Guardar</span>
                }
            </div>


            <input
                    type="file"
                    style = {{display:'none'}}
                    onChange={handleFileChange}
                    id = "fileProjectSelector"
                    name = "file"
                    max-size="10000"
            />

        </div>
    )
}
