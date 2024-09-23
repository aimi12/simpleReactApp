import React, { useState }  from "react";
import Modal from 'react-bootstrap/Modal';

const WarningModal = () => {
   const [show, setShow] = useState(true);
   const handleClose = () => setShow(false);

   return (
      <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Warning!</Modal.Title>
        </Modal.Header>
      </Modal>
    </>
   );

};

export default WarningModal;