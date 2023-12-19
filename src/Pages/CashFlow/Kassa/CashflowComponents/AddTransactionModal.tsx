import React from "react";

type ModalProps = {
  transactionModal: boolean;
  setTransactionModal: React.Dispatch<React.SetStateAction<boolean>>;
  setEditData: any;
  modaltype: any;
  modal: (status: boolean, close: () => void) => React.ReactNode;
};

const AddTransactionModal = ({
  transactionModal,
  setTransactionModal,
  setEditData,
  modaltype,
  modal,
}: ModalProps) => {
  const closeModal = () => {
    setTransactionModal(false);
    setEditData(null);
    modaltype("транцакции");
  };

  return <>{modal(transactionModal, closeModal)}</>;
};

export default AddTransactionModal;
