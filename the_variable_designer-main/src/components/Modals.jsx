import React from 'react';
import Modal from "react-bootstrap/Modal";
import ModalBody from "react-bootstrap/ModalBody";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalFooter from "react-bootstrap/ModalFooter";
import ModalTitle from "react-bootstrap/ModalTitle";
import {MdCancel} from 'react-icons/md'
import '../styles/modal.css'
const Modals = ({isOpens,hideModal,path}) => {

console.log('path',path);
  return (
    <div>
     
      <Modal className='modal' show={isOpens} onHide={hideModal}>
      
          <Modal.Header>
            <Modal.Title></Modal.Title>
            
            <MdCancel onClick={hideModal} className="mdCancel"/>
          </Modal.Header>
        <Modal.Body>
        <img className="img" src={path} alt=""/>
        </Modal.Body>
        <Modal.Footer>
       
   
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Modals;
