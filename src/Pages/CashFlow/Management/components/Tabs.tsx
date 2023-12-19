import React, { useEffect, useState } from "react";
import { FaWallet } from "react-icons/fa6";

import { MdModeEdit, MdDelete } from "react-icons/md";
import { Input, Modal, Popconfirm } from "antd";
import type { MenuProps } from "antd";
import axios from "axios";
import ChekModal from "./ChekModal";
import UserModal from "./UserModal";
import { CiWarning } from "react-icons/ci";
import { Alert } from "antd";
import ManagamentTable from "./ManagamentTable";
import userIndex from "../../../../API/Cashflow/Managements/userIndex";
const Tabs: React.FC = () => {
  const { getUserList, getUserDelete } = userIndex();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editUserModal, setEditUserModal] = useState(false);
  const [editUserData, setEditUserData] = useState({
    id: 0,
    employee: "",
    name: {},
  });
  const tableConfigs = [
    { name: "№", size: "5%" },
    { name: "Касса", size: "20%" },
    { name: "Количество счетов", size: "20%" },
    { name: "Дата открытия", size: "25%" },
    { name: "Сотрудник", size: "25%" },
    { name: "", size: "5%" },
  ];
  const [users, setUsers] = useState<any[]>([]);
  const [userDeleteModal, setUserDeleteModal] = useState(false);
  const [userDeleteInput, setUserDeleteInput] = useState("");
  const [deleteUserId, setDeleteUserId] = useState<any>(null);
  const [isInvalid, setIsInvalid] = useState<boolean>(false);
  const showModal = (user: any) => {
    setIsModalOpen(!isModalOpen);
    setDeleteUserId(user.name && user.id);
    console.log("modal", user);
  };

  const showEditUserModal = (id: number, name: string, employee: string) => {
    setEditUserModal(!editUserModal);
    setEditUserData({ id, employee, name });
  };
  const handleUpdate = async () => {
    try {
      if (!editUserData.id) {
        console.error("User ID is missing");
        return;
      }

      await axios.put(await getUserUpdate(editUserData.id), {
        name: editUserData.name,
        employee: editUserData.employee,
      });

      handleClose();
    } catch (error) {
      console.error("Error updating user data:", error);
    }
  };

  const showUserDelete = (userId: number) => {
    setUserDeleteModal(true);
    setUserDeleteInput("");
    setDeleteUserId(userId);
  };

  const handleDelete = async () => {
    try {
      if (!deleteUserId) {
        console.error("User ID is missing");
        return;
      }

      const userNameToDelete = users.find(
        (user) => user.id === deleteUserId
      )?.name;

      if (userDeleteInput === userNameToDelete) {
        window.alert(`Kassa muvofaqiyatli o'chirildi`);
        await handleDeleteConfirmed(deleteUserId);
        handleClose();
      } else {
        console.log("no malum");
        setIsInvalid(true);
      }
    } catch (error) {
      console.error("Error deleting user:", error);
      handleClose();
    }
  };
  const handleDeleteConfirmed = async (userId: number) => {
    try {
      await getUserDelete(userId);

      const updatedUsers = users.filter((user) => user.id !== userId);
      setUsers(updatedUsers);
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  const handleClose = () => {
    setIsModalOpen(false);
    setEditUserModal(false);
    setUserDeleteModal(false);
    setDeleteUserId(null);
  };
  const fetchUsers = async () => {
    try {
      const response = await getUserList();
      console.log("ma'lumotlar", response.data);

      setUsers(response.data || []);
    } catch (error) {
      console.error("Error fetching visitors:");
    }
  };

  // useEffect(() => {
  //   const fetchUsers = async () => {
  //     try {
  //       localStorage.setItem(
  //         "token",
  //         "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJJZCI6IjEiLCJyb2xlIjoiVXNlciIsInVuaXF1ZV9uYW1lIjoiSGFiaWJ1bGxvaCIsIm5iZiI6MTcwMjUzODc0MywiZXhwIjoxNzA1MjE3MTQzLCJpYXQiOjE3MDI1Mzg3NDMsImlzcyI6Imh0dHBzOi8vbG9jYWxob3N0OjcwODEiLCJhdWQiOiJFUlAtU3lzdGVtX1NlcnZlciJ9.UN3aCSJN7ByortW_-QaY4G4UXd-jQrtEd12L9SVMP8I"
  //       );
  //       const token = localStorage.getItem("token");

  //       if (!token) {
  //         console.error("Autentifikatsiya belgisi yo'q");
  //         return;
  //       }

  //       const config = {
  //         headers: {
  //           Authorization: `Bearer ${token}`,
  //           "Content-Type": "application/json",
  //         },
  //       };

  //       const response = await axios.get(
  //         "http://103.125.217.96:83/api/cashflows/Get-All-Cashflow-in-User",
  //         config
  //       );

  //       setUsers(response.data || []);
  //       console.log("ma'lumotlar", response.data);
  //     } catch (error) {
  //       console.error("Foydalanuvchi ma'lumotlarini olishda xatolik:", error);
  //     }
  //   };

  //   fetchUsers();
  // }, []);
  useEffect(() => {
    fetchUsers();
  }, []);
  const firstUser = users[0];

  const menuItems = (user: any) => {
    const items: MenuProps["items"] = [
      {
        key: "1",
        label: (
          <div
            onClick={() => showModal(user)}
            className="flex items-center gap-2"
          >
            <button>
              <FaWallet />
            </button>
            Добавить счет
          </div>
        ),
      },
      {
        key: "2",
        label: (
          <div className="flex items-center gap-2">
            <button>
              <MdModeEdit />
            </button>
            Изменить
          </div>
        ),
        onClick: () =>
          firstUser && showEditUserModal(user.id, user.employee, user.name),
      },
      {
        key: "3",
        label: (
          <Popconfirm
            title="Malumotlarni o'chirmoqchimisz?"
            onConfirm={() => showUserDelete(user.id)}
            okText="Да"
            cancelText="Нет"
            okType={"danger"}
          >
            <div className="flex items-center gap-2 border-0 ">
              <button className="border-0 outline-none">
                <MdDelete />
              </button>
              Удалить
            </div>
          </Popconfirm>
        ),
      },
    ];

    return items;
  };

  return (
    <>
      {isModalOpen && (
        <ChekModal showModal={showModal} defaultUserId={deleteUserId} />
      )}
      {editUserModal && (
        <UserModal
          showEditUserModal={handleClose}
          editUserData={editUserData}
          handleUpdate={handleUpdate}
          showAddUserModal={showModal}
        />
      )}
      <Modal
        title={`Kassani o'chirish`}
        open={userDeleteModal}
        onOk={handleDelete}
        onCancel={handleClose}
        okText="Да"
        cancelText="Bekor qilish"
        okType={
          userDeleteInput ===
          users.find((user) => user.id === deleteUserId)?.name
            ? "danger"
            : undefined
        }
        okButtonProps={
          userDeleteInput !==
          users.find((user) => user.id === deleteUserId)?.name
            ? { disabled: true }
            : undefined
        }
      >
        <div className="flex-col space-y-2">
          <div className="border border-orange-300 p-5 flex items-center gap-4 mb-5">
            <CiWarning className="text-[65px] text-orange-300 font-bold " />{" "}
            <p className="font-semibold">
              После удаления данных их невозможно восстановить. Если вы уверены
              в удалении, нажмите на название оформления заказа.
            </p>
          </div>
          <h1>
            Введите{" "}
            <strong>
              {users.find((user) => user.id === deleteUserId)?.name}
            </strong>{" "}
            {""}
            чтобы удалить кассу
          </h1>
          <Input
            placeholder={`Введите имя кассы`}
            value={userDeleteInput}
            onChange={(e) => {
              setUserDeleteInput(e.target.value);
              setIsInvalid(e.target.value.length > 0 ? false : true);
            }}
            status={isInvalid ? "error" : ""}
          />
          {isInvalid ? (
            <Alert message="правильно введите название кассы" banner />
          ) : (
            <></>
          )}
        </div>
      </Modal>

      <ManagamentTable
        title=""
        tableConfigs={tableConfigs}
        data={users}
        height={70}
        menuItems={menuItems}
      />
    </>
  );
};

export default Tabs;
function getUserUpdate(id: number): string | PromiseLike<string> {
  throw new Error("Function not implemented.");
}
