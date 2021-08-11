import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { startGetEntries } from '../../actions/blog';
import { LoadingIconScreen } from '../ui/LoadingIconScreen';
import { PaginateScreen } from '../ui/PaginateScreen';
import { EntryModal } from './EntryModal';
import { EntryScreen } from './EntryScreen';

export const EntriesScreen = () => {

    const {entries} = useSelector(state => state.blog);
    const {fetch} = useSelector(state => state.ui);
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(startGetEntries());
    },[dispatch]);
    
    return (
        <div className="principal__content">
            <div className="blog__content ">
                <div className="blog__text">
                    <h3 className="principal__title"><i className="fab fa-microblog m-2"></i> Blog</h3>
                </div>
                <div className="container_content w-90">
                    <div className="blog__new-entry">
                        <h5 className="principal__title_secundary"><i className="fas fa-file-alt m-2"></i> Entradas</h5>
                    </div>
                    <div className="blog__entries w-100 h-100">

                        <div className="blog__content_entries w-100 h-80">
                            {
                                fetch
                                ?
                                    <LoadingIconScreen/>
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
                </div>
            </div>
            <EntryModal/>
        </div>
    )
}
