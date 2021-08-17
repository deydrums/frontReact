import React from 'react';
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import { unsetActiveEntry } from '../../actions/blog';
import { closeModal } from '../../actions/ui';
import { NewEntryScreen } from './NewEntryScreen';

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
    },
};

Modal.setAppElement('#root');


export const EntryModal = () => {

    const dispatch = useDispatch();
    const {modalOpen} = useSelector(state => state.ui)

    const handleCloseModal = () =>{
        dispatch(closeModal());
        dispatch(unsetActiveEntry());
    }

    return (
        <Modal
        isOpen={modalOpen}
        // onAfterOpen={afterOpenModal}
        onRequestClose={handleCloseModal}
        style={customStyles}
        className="modal scroll_options"
        overlayClassName="modal-fondo"
        closeTimeoutMS={200}
        ariaHideApp={!process.env.NODE_ENV === 'test'}
       >
           <NewEntryScreen closeModal = {closeModal}/>
       </Modal>
    )
}
