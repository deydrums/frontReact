import React from 'react';
import { images } from '../../../helpers/getImages';
import moment from 'moment';
//import ReactHtmlParser from 'react-html-parser';


moment.updateLocale('es', {
    months: 'Enero_Febrero_Marzo_Abril_Mayo_Junio_Julio_Agosto_Septiembre_Octubre_Noviembre_Diciembre'.split('_'),
    monthsShort: 'Enero._Feb._Mar_Abr._May_Jun_Jul._Ago_Sept._Oct._Nov._Dec.'.split('_'),
    weekdays: 'Domingo_Lunes_Martes_Miercoles_Jueves_Viernes_Sabado'.split('_'),
    weekdaysShort: 'Dom._Lun._Mar._Mier._Jue._Vier._Sab.'.split('_'),
    weekdaysMin: 'Do_Lu_Ma_Mi_Ju_Vi_Sa'.split('_')
})



export const BlogEntry = (entry) => {

    const date = moment(entry.created_at);

    return (
        <div 
            className="public__blog-entrie-cont pointer" 
            data-aos="zoom-in-right"
            style = {{
                backgroundSize: 'cover',
                backgroundImage: `url(${images(`./code.png`).default})`
                //backgroundColor: 'rgba(102, 250, 193, 0.699)'
            }}
        >
            <div className="public__blog-entrie-content" >
            {/* { ReactHtmlParser(entry.content) } */}
                <div className="public__blog-entrie-desc">
                        {
                            (entry.title.length < 1000)
                            ?
                            <h1>{entry.title}</h1>
                            :
                            <h1>{entry.title.substring(0,1000)}...</h1>
                        
                        }
                    <p><strong>{entry.user.name}</strong> | {date.format('LL')} </p>
                </div>
            </div>
        </div>
    )
}
