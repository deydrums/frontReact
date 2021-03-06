import React from 'react';
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import { unsetActiveProject } from '../../actions/portafolio';
import { closeModal } from '../../actions/ui';
import { NewProjectScreen } from './NewProjectScreen';

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
        dispatch(unsetActiveProject());
        dispatch(closeModal());
    }

    return (
        <Modal
        isOpen={modalOpen}
        //isOpen={true}
        // onAfterOpen={afterOpenModal}
        onRequestClose={handleCloseModal}
        style={customStyles}
        className="modal scroll_options"
        overlayClassName="modal-fondo"
        closeTimeoutMS={10}
        ariaHideApp={!process.env.NODE_ENV === 'test'}
       >
           <NewProjectScreen/>
           {/* <NewEntryScreen closeModal = {closeModal}/> */}
       </Modal>
    )
}
