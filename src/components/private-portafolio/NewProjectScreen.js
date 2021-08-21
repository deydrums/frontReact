import React, {useEffect} from 'react';
import { useForm } from '../../hooks/useForm';
import { useDispatch, useSelector } from 'react-redux';
import { removeError } from '../../actions/ui';
import { LoadingIconScreen } from '../ui/LoadingIconScreen';


const baseUrl = process.env.REACT_APP_API_URL;


export const NewProjectScreen = () => {
    
    //redux
    const dispatch = useDispatch();
    const {msgError, fetch} = useSelector(state => state.ui);
   
    //useEffect hook
    useEffect(() => {
        dispatch(removeError());
    }, [dispatch])

    //useForm customHook
    const [values, handleInputChange, reset, setValues] = useForm({
        name:"Nuevo Proyecto",
        desc:"Hola mundo, esta es un nuevo Proyecto",
        date: "",
        technologies: "Hola",
        responsive: "no",
        role : "frontend",
        link: "facebook.com"
    });
	
    const{ name, desc, date, technologies, responsive, role, link} = values;

    //Submit
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(values);
    }


    return (
        <div className="portafolio__newproject-content">
            
            <div className="portafolio__newproject-buttons">
                <div className="portafolio__newproject-buttons-cont">
                    <button type="Submit" className="btn btn-primary">
                        {
                            fetch?<LoadingIconScreen/>:<span>Imagen</span>
                        }
                    </button>
                    <button type="Submit" className="btn btn-primary" onClick={handleSubmit}>
                        {
                            fetch?<LoadingIconScreen/>:<span>Guardar</span>
                        }
                    </button>
                    <button className="btn btn-close" style={{margin: '0'}}>
                        <i className="fas fa-times"></i>
                    </button>
                </div>
            </div>
            <div className="portafolio__newproject-text">
                <h2>Nuevo Proyecto</h2>
            </div>

            
            <form className="portafolio__newproject-form" >
                    {
                        msgError&&<div className="auth__alert-error">{msgError}</div>
                    }
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
                        className="auth__input"
                        autoComplete="off"
                        value={desc}
                        onChange = {handleInputChange}
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
        </div>
    )
}
