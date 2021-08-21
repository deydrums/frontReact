import React from 'react';
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from '../../actions/ui';

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
    },
};

Modal.setAppElement('#root');


export const ProjectModal = () => {

    const dispatch = useDispatch();
    const {modalOpen} = useSelector(state => state.ui)

    const handleCloseModal = () =>{
        dispatch(closeModal());
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

           <div>
               Modal
           </div>
           {/* <NewEntryScreen closeModal = {closeModal}/> */}
       </Modal>
    )
}
