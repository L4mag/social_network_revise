import React from 'react'
import Button from 'react-bootstrap/Button'
import BSModal from 'react-bootstrap/Modal'

const Modal = ({ title, show, onHide, body, footer }) => {
  return (
    <BSModal
      show={show}
      onHide={onHide}
      size='lg'
      aria-labelledby='contained-modal-title-vcenter'
      centered
    >
      <BSModal.Header closeButton>
        <BSModal.Title id='contained-modal-title-vcenter'>
          {title}
        </BSModal.Title>
      </BSModal.Header>
      <BSModal.Body>{body}</BSModal.Body>
      <BSModal.Footer>
        {footer}
        <Button onClick={onHide}>Close</Button>
      </BSModal.Footer>
    </BSModal>
  )
}

export default Modal
