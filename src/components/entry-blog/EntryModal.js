import React from 'react';
import Modal from 'react-modal';

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
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
        className="modal"
        overlayClassName="modal-fondo"
        closeTimeoutMS={200}
        ariaHideApp={!process.env.NODE_ENV === 'test'}
       >
           <h1>Hola Mundo</h1>

       </Modal>
    )
}
