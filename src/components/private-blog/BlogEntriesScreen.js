import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { startGetEntries } from '../../actions/blog';
import { openModal } from '../../actions/ui';
import { LoadingIconScreen } from '../ui/LoadingIconScreen';
import { PaginateScreen } from '../ui/PaginateScreen';
import { EntryModal } from './EntryModal';
import { EntryScreen } from './EntryScreen';


export const BlogEntriesScreen = () => {

    const {entries} = useSelector(state => state.blog);
    const {fetch} = useSelector(state => state.ui);
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(startGetEntries());
    },[dispatch]);

    const handleNewEntry = () => {
        dispatch(openModal());
    }

    return (
        <div className="blog__container__entries">
        <div className="blog__options__entries">
            <h5 className="principal__title_secundary"><i className="fas fa-file-alt m-2"></i> Entradas</h5>
            <button className="btn btn-primary h-100" onClick ={handleNewEntry}>
                <span>Nueva entrada</span>
            </button>
        </div>
        <div className="blog__entries w-100 h-100">

            <div className="blog__content_entries w-100 h-80">
                {
                    fetch
                    ?
                    <div className="mt-3">
                        <LoadingIconScreen/>
                    </div>
                    :
                        entries.map(entry => (
                            <EntryScreen 
                                key={entry.id}
                                {...entry}
                            />
                        ))

                }
            </div>
            <div className="blog__content__paginate w-100 h-20">
                <PaginateScreen/>
               
            </div>


        </div>
        <EntryModal/>

    </div>
    )
}
