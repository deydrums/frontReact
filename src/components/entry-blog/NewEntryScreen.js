import React, {useState, useRef} from 'react';
import JoditEditor from "jodit-react";

export const NewEntryScreen = () => {
    
	const editor = useRef(null);
    const initialState = {
        title: 'New Entry',
        content: 'New Entry'
    }
	const [values, setValues] = useState(initialState);
	
    const{ title, content} = values;

	const config = {
		readonly: false, // all options from https://xdsoft.net/jodit/doc/
        height: 470,
        allowResizeY: false,
        language: "es",
	}

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(values)
    }

    const handleInputChange = ({target}) => {
        setValues({
            ...values,
            [target.name]:target.value
        });
    }

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
