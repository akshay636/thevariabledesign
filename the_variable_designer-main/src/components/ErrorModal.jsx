import Modal from 'react-bootstrap/Modal'
import { Button } from 'bootstrap';
import {IoLogoWhatsapp} from 'react-icons/io'
import '../styles/erromodal.css'
function ErrorModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered style={{color:'black', backgroundColor:'white'}}
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
                Privacy Error
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>For Screenshot</h4>
          <p>
           If You want to this elevation
          </p>
          <p> this elevation than click on below link
        below link redirected to whatsapp chat where you can ask for elivation</p>
      {/* <a href='https://api.whatsapp.com/send?phone=918103070058'> <IoLogoWhatsapp className='BsWhatsapp'></IoLogoWhatsapp></a>  */}
    
        </Modal.Body>
        <Modal.Footer>
        <button onClick={props.onHide}> close</button>
       
          
        </Modal.Footer>
      </Modal>
    );
  }
export default  ErrorModal;