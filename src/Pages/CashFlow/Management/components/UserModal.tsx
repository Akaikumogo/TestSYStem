import { Modal, Input, Button } from "antd";
import { useEffect, useState } from "react";
import userIndex from "../../../../API/Cashflow/Managements/userIndex";

type UserModalProps = {
  showEditUserModal: () => void;
  showAddUserModal: (username: any) => void;
  editUserData: {
    name?: any;
    employee: string;
    id: number;
  };
  handleUpdate: () => void;
};

const UserModal: React.FC<UserModalProps> = ({
  showEditUserModal,
  editUserData,
  handleUpdate,
}) => {
  const [isModalVisible, setIsModalVisible] = useState(true);
  const [editedUserData, setEditedUserData] = useState({
    name: editUserData.name || "",
    employee: editUserData.employee || "",
  });
  const [isDataValid, setIsDataValid] = useState(true);

  const { getUserPost, getUserUpdate } = userIndex();
  const handleClose = () => {
    setIsModalVisible(false);
    showEditUserModal();
  };

  const handleInputChange = (field: string, value: string) => {
    setEditedUserData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
    setIsDataValid(true);
  };

  const handleUpdateClick = async () => {
    try {
      if (
        editedUserData.name.length === 0 ||
        editedUserData.employee.length === 0
      ) {
        setIsDataValid(false);
        return;
      }

      if (editUserData.id) {
        await getUserUpdate(editUserData.id, {
          name: editedUserData.name,
          account: editedUserData.employee,
        });
      } else {
        await getUserPost({
          name: editedUserData.name,
          employee: editedUserData.employee,
        });
      }

      handleUpdate();
      handleClose();
    } catch (error) {
      console.error("Error updating user data:", error);
    }
  };

  return (
    <div>
      <Modal
        title="Изменить данные"
        open={isModalVisible}
        onCancel={handleClose}
        footer={null}
        className="text-center"
      >
        <div className="flex justify-start text-start items-center mb-5 w-full">
          <div className="w-[35%]">Имя Кассы</div>
          <Input
            placeholder="Введите имя счета"
            className={`w-[65%] h-[45px] ${
              editedUserData.name.length > 0
                ? ""
                : ""
            }`}
            value={editedUserData.name}
            onChange={(e) => handleInputChange("name", e.target.value)}
          />
        </div>
        <div className="flex justify-start text-start items-center w-full">
          <div className="w-[35%]">Имя сотрудника</div>
          <Input
            placeholder="Введите имя сотрудника"
            className={`w-[65%] h-[45px] ${
              editedUserData.employee.length > 0
                ? ""
                : ""
            }`}
            value={editedUserData.employee}
            onChange={(e) => handleInputChange("employee", e.target.value)}
          />
        </div>
        {!isDataValid ? (
          <p className="text-red-500 mt-2">Малумотlarni toldiring!</p>
        ) : null}
        <Button
          type="primary"
          className="bg-blue-500 text-white rounded-md mt-5"
          onClick={handleUpdateClick}
        >
          {editUserData.id ? "Обновить" : "Добавить"}
        </Button>
      </Modal>
    </div>
  );
};

export default UserModal;
