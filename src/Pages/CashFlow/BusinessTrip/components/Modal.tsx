import { Modal } from "antd";
type ModalProps = {
  transactionModal: boolean;
  setTransactionModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const AddTransactionModal = ({
  transactionModal,
  setTransactionModal,
}: ModalProps) => {
  return (
    <Modal
      open={transactionModal}
      onOk={() => setTransactionModal(false)}
      footer={false}
      closeIcon={false}
      onCancel={() => setTransactionModal(false)}
      width={"400px"} // Set the desired width
      style={{ height: 300 }}
    >
      <div className=" w-[500px] h-[700px] border">
        
      </div>
      
    </Modal>
  );
};

export default AddTransactionModal;