import React from 'react';
import './Modal.css';

const Modal = ({children, onClose, header, footer}) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <span className="close" onClick={onClose}>&times;</span>
          <h2>{header}</h2>
        </div>
        <div className="modal-body">
          {children}
        </div>
        {footer && <div className="modal-footer">
          {footer}
        </div>}
      </div>
    </div>
  );
}

export default Modal;