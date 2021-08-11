import React from 'react';
import Modal from 'react-modal';
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

    const closeModal = () =>{
        console.log('Cerrando')
    }

    return (
        <Modal
        isOpen={true}
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        className="modal scroll_options"
        overlayClassName="modal-fondo"
        closeTimeoutMS={200}
        ariaHideApp={!process.env.NODE_ENV === 'test'}
       >
           <NewEntryScreen/>
       </Modal>
    )
}
