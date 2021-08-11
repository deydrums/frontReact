import React, { useEffect } from 'react';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { setActiveEntry, unsetActiveEntry } from '../../actions/blog';

moment.updateLocale('es', {
    months: 'Enero_Febrero_Marzo_Abril_Mayo_Junio_Julio_Agosto_Septiembre_Octubre_Noviembre_Diciembre'.split('_'),
    monthsShort: 'Enero._Feb._Mar_Abr._May_Jun_Jul._Ago_Sept._Oct._Nov._Dec.'.split('_'),
    weekdays: 'Domingo_Lunes_Martes_Miercoles_Jueves_Viernes_Sabado'.split('_'),
    weekdaysShort: 'Dom._Lun._Mar._Mier._Jue._Vier._Sab.'.split('_'),
    weekdaysMin: 'Do_Lu_Ma_Mi_Ju_Vi_Sa'.split('_')
})



export const EntryScreen = (entry) => {

    const dispatch = useDispatch();

    const {title,user,created_at} = entry;
    const date = moment(created_at);

    useEffect(() => {
        dispatch(unsetActiveEntry())
    }, [])

    const handleEntryClick = () => {
        dispatch(setActiveEntry(entry));
    }

    return (
        <div className="blog__content__entry pointer" onClick={handleEntryClick}> 
            <div className="blog__content__color">

            </div>
            <div className="blog__content__entry-data">
                <h2>{title}</h2>
                <h3>{user.name}</h3>
            </div>
            <div className="blog__content__date">
                <h3>{date.format('dddd')}</h3>
                <h2>{date.format('Do')}</h2>
                <h3>{date.format('MMM')} {date.format('y')}</h3>
            </div>
        </div>
    )
}
