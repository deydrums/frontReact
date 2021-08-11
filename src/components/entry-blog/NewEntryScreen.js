import React, {useEffect, useRef} from 'react';
import JoditEditor from "jodit-react";
import { useForm } from '../../hooks/useForm';
import { useDispatch, useSelector } from 'react-redux';
import { removeError, setError } from '../../actions/ui';

export const NewEntryScreen = () => {
    
    //redux
    const dispatch = useDispatch();
    const {msgError} = useSelector(state => state.ui);

    //useEffect hook
    useEffect(() => {
        dispatch(removeError());
    }, [dispatch])

    //useRef
	const editor = useRef(null);

    //useForm customHook
    const [values, handleInputChange, setValues] = useForm({
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
            console.log(values)
        }
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
        <div className="principal__content">
            <div className="entry-blog__submit">
                <button type="Submit" className="btn btn-primary" onClick={handleSubmit}>Guardar</button>
            </div>

            <div className="entry-blog__content">
                <div className="entry-blog__text">
                    <h3 className="principal__title"><i className="fas fa-file-alt m-2"></i> Nueva entrada</h3>
                </div>

                <form className="entry-blog__newEntry">
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
