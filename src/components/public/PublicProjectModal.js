import React from 'react';
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import { unsetActiveProject } from '../../actions/portafolio';
import { closeModal } from '../../actions/ui';
import { ProjectDetailScreen } from './ProjectDetailScreen';

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
    },
};

Modal.setAppElement('#root');


export const PublicProjectModal = () => {

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
        className="modal_public "
        overlayClassName="modal-fondo"
        closeTimeoutMS={300}
        ariaHideApp={!process.env.NODE_ENV === 'test'}
       >
           <div className="modal-btn-close pointer" onClick={handleCloseModal}><i class="fas fa-times"/></div>
           <ProjectDetailScreen/>
       </Modal>
    )
}
