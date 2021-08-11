import React, {useEffect, useRef} from 'react';
import JoditEditor from "jodit-react";
import { useForm } from '../../hooks/useForm';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal, removeError, setError } from '../../actions/ui';
import { startCreateEntry, unsetActiveEntry } from '../../actions/blog';
import { LoadingIconScreen } from '../ui/LoadingIconScreen';

export const NewEntryScreen = () => {
    
    //redux
    const dispatch = useDispatch();
    const {msgError, fetch} = useSelector(state => state.ui);
    const {activeEntry} = useSelector(state => state.blog);

    //useEffect hook
    useEffect(() => {
        dispatch(removeError());
    }, [dispatch])

    //useRef
	const editor = useRef(null);

    //useForm customHook
    const [values, handleInputChange, reset, setValues] = useForm({
        title: '',
        content: ''
    });
	
    const{ title, content} = values;

    //config jodit
	const config = {
		readonly: false, // all options from https://xdsoft.net/jodit/doc/
        height: 470,
        allowResizeY: false,
        language: "es",
        askBeforePasteHTML: false,
	}

    //submit

    const handleSubmit = (e) => {
        e.preventDefault()
        if (isFormValid()){
            if(activeEntry){
                console.log('Editar')
            }else{
                dispatch(startCreateEntry(title,content,reset));
            }
        }
    }

    //Close Modal

    const handleCloseModal = () =>{
        dispatch(closeModal());
        dispatch(unsetActiveEntry());
    }

    //form validate
    const isFormValid = () =>{
        if(title.trim().length ===0){
            dispatch(setError('El titulo es requerido'));
            return false;
        }else if(content.trim().length ===0){
            dispatch(setError('El contenido es requerido'));
            return false;
        }
        dispatch(removeError());
        return true;
    };

    return (
        <div className="principal__content scroll_options">
            <div className="blog__buttons">
                <div className = "blog__button__save">
                    <button type="Submit" className="btn btn-primary w-100" onClick={handleSubmit}>
                        {
                            fetch?<LoadingIconScreen/>:<span>Guardar</span>
                        }
                    </button>
                </div>

                <div className = "blog__button__save">
                    <button className="btn btn-close" onClick={handleCloseModal}>
                        <i className="fas fa-times"></i>
                    </button>
                </div>
            </div>

            <div className="blog__content">
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
            </div>
        </div>
    )
}
