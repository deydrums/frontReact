import React, {useEffect, useRef} from 'react';
import JoditEditor from "jodit-react";
import { useForm } from '../../hooks/useForm';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal, removeError, setError } from '../../actions/ui';
import { startCreateEntry, startDeleteEntry, startUpdateEntry, startUploadEntry, unsetActiveEntry } from '../../actions/blog';
import { LoadingIconScreen } from '../ui/LoadingIconScreen';

const baseUrl = process.env.REACT_APP_API_URL;


export const NewEntryScreen = () => {
    
    //redux
    const dispatch = useDispatch();
    const {msgError, fetch} = useSelector(state => state.ui);
    const {activeEntry, categories} = useSelector(state => state.blog);
    const {uid} = useSelector(state => state.auth);
    //useEffect hook
    useEffect(() => {
        dispatch(removeError());
    }, [dispatch])

    //useRef
	const editor = useRef(null);

    //useForm customHook
    const [values, handleInputChange, reset, setValues] = useForm({
        title: '',
        content: '',
        category_id: '',
    });
	
    const{ title, content, category_id} = values;


    //Cargar valores
    useEffect(() => {
        if(activeEntry) {
            setValues(activeEntry);
        }
    }, [activeEntry,setValues]);


    //config jodit
	const config = {
		readonly: false, // all options from https://xdsoft.net/jodit/doc/
        height: 370,
        allowResizeY: false,
        language: "es",
        askBeforePasteHTML: false,
	}

    //submit

    const handleSubmit = (e) => {
        e.preventDefault()
        if (isFormValid()){
            if(activeEntry){
                dispatch(startUpdateEntry(activeEntry.id, values));
            }else{
                dispatch(startCreateEntry(values));
            }
        }
    }

    //Close Modal

    const handleCloseModal = () =>{
        dispatch(closeModal());
        dispatch(unsetActiveEntry());
        reset();
    }

    //Delete Entre

    const handleDeleteEntry = () => {
        dispatch(startDeleteEntry(activeEntry.id));
    }

    //form validate
    const isFormValid = () =>{
        if(title.trim().length ===0){
            dispatch(setError('El titulo es requerido'));
            return false;
        }else if(category_id.toString().trim().length ===0){
            dispatch(setError('La categoria es requerida'));
            return false;
        }else if(content.trim().length ===0){
            dispatch(setError('El contenido es requerido'));
            return false;
        }
        dispatch(removeError());
        return true;
    };

    //uploadimg
    const handlePictureUpload = () => {
        document.querySelector('#fileEntrySelector').click();
    }

    const handleFileChange = (e) => {
        const file = e.target.files;
        if(file){
            dispatch(startUploadEntry(activeEntry.id,file));
        }
    }

    return (
        <div className="principal__content h-100">
            <div className="blog__buttons">

                {
                    (activeEntry && activeEntry.user_id === uid)&&
                    <>
                        <div className = "blog__button">
                            <button type="Submit" className="btn btn-primary w-90" onClick={handlePictureUpload} disabled={fetch}>
                                {
                                    fetch?<LoadingIconScreen/>:<span>Imagen</span>
                                }
                            </button>
                        </div>

                        <div className = "blog__button">
                            <button type="Submit" className="btn btn-primary w-90" onClick={handleSubmit} disabled={fetch}>
                                {
                                    fetch?<LoadingIconScreen/>:<span>Guardar</span>
                                }
                            </button>
                        </div>

                        <div className = "blog__button ">
                            <button className="btn btn-danger w-90" onClick={handleDeleteEntry} disabled={fetch}>
                                {
                                    fetch?<LoadingIconScreen/>:<span>Borrar</span>
                                }
                            </button>
                        </div>
                    </>
                }
                {
                    (!activeEntry)&&
                        <div className = "blog__button">
                            <button type="Submit" className="btn btn-primary w-90" onClick={handleSubmit} disabled={fetch}>
                                {
                                    fetch?<LoadingIconScreen/>:<span>Guardar</span>
                                }
                            </button>
                        </div>
                }

                <div className = "blog__button">
                    <button className="btn btn-close" onClick={handleCloseModal} disabled={fetch}>
                        <i className="fas fa-times"></i>
                    </button>
                </div>
            </div>

            <div className="blog__newEntry_content ">
                <div className="blog__text">
                    {
                        activeEntry
                        ?
                            <h3 className="principal__title"><i className="fas fa-file-alt m-2"></i> Editar entrada</h3>
                        :
                            <h3 className="principal__title"><i className="fas fa-file-alt m-2"></i> Nueva entrada</h3>
                    }
                </div>

                <form className="blog__newEntry">
                    {
                        msgError&&<div className="auth__alert-error">{msgError}</div>
                    }
                    <input
                        type="text"
                        placeholder="Titulo..."
                        name = "title"
                        className="auth__input"
                        autoComplete="off"
                        value={title}
                        onChange = {handleInputChange}
                    />
                    <select 
                        onChange={handleInputChange} 
                        value ={category_id} 
                        name="category_id" 
                        className="auth__input"
                    >
                        <option value="" defaultValue disabled hidden>Selecciona una categor??a</option>
                        {
                            categories.map(category => (
                                <option 
                                    key={category.id} 
                                    value={category.id}
                                >
                                    {category.name}
                                </option>
                            ))
                        }

                    </select>
                    <JoditEditor
                        ref={editor}
                        value={content}
                        config={config}
                        tabIndex={1} // tabIndex of textarea
                        onBlur={newContent => setValues({...values, content: newContent})} // preferred to use only this option to update the content for performance reasons
                        //onChange={handlec}
                        className="editor"
                        />                        
                </form>
               
               {
                   activeEntry&&
                   (
                    activeEntry.image&&
                    <>
                        <div className="blog__text">
                            <h3 className="principal__title"><i className="fas fa-image m-2"></i> Imagen</h3>
                        </div>

                        <div 
                            className="blog__image"
                        >
                            <img src={`${baseUrl}/entry/get-image/${activeEntry.image.replace('.','/')}`} alt="user"></img>
                        </div>

                    </>

                   )
               }
               



                
                <input
                    type="file"
                    style = {{display:'none'}}
                    onChange={handleFileChange}
                    id = "fileEntrySelector"
                    name = "file"
                    max-size="10000"
                />
            </div>
        </div>
    )
}
