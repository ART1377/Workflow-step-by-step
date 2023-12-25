// Modal.tsx

import React from "react";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

const BaseModal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  return (
    <Modal open={isOpen} onClose={onClose} center>
      <div>
        <button onClick={onClose}>Close</button>
        {children}
      </div>
    </Modal>
  );
};

export default BaseModal;
