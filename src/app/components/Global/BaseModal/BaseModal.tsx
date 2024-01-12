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
    <>
      <style>
        {`
      .modalStyle{
        border-radius: var(--radius-main);
        background-color: var(--light);
        min-width:85%;
        min-height:85%;
        max-width:85%;
        max-height:85%;
        }
      `}
      </style>
      <Modal
        open={isOpen}
        onClose={onClose}
        center
        classNames={{
          modal: "modalStyle",
        }}
      >
        <div>
          <button onClick={onClose}></button>
          {children}
        </div>
      </Modal>
    </>
  );
};

export default BaseModal;
