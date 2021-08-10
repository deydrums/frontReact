import React, {useState, useRef} from 'react';
import JoditEditor from "jodit-react";

export const NewEntryScreen = () => {
    
	const editor = useRef(null)
	const [content, setContent] = useState('')
	
	const config = {
		readonly: false, // all options from https://xdsoft.net/jodit/doc/
        height: 500,
        allowResizeY: false,
        language: "es",
	}

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(content)
    }

    const handlec = () =>{
        console.log(content)
    }

    return (
        <div className="principal__content">
            <div className="entry-blog__content">
                <div className="entry-blog__text">
                    <h3 className="principal__title"><i className="fas fa-file-alt m-2"></i> Nueva entrada</h3>
                </div>
                <form className="entry-blog__newEntry">
                    <JoditEditor
                        ref={editor}
                        value={content}
                        config={config}
                        tabIndex={1} // tabIndex of textarea
                        onBlur={newContent => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
                        onChange={handlec}
                        className="editor"
                        />

                        <button type="Submit" className="btn btn-primary mt-2 btn-right" onClick={handleSubmit}>Enviar</button>
                        
                </form>
            </div>
        </div>
    )
}
