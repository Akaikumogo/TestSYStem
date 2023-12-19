import { useState } from "react";
import { FaCoins } from "react-icons/fa6";
import { IoWallet } from "react-icons/io5";
import ChekModal from "./ChekModal";
import UserModal from "./UserModal";
import ChashflowInformation from "./ChashflowInformation";

const MenegementLeftPanel = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editUserModal, setUserModal] = useState(false);

  const showAddUserModal = () => {
    setUserModal(!editUserModal);
  };
  const showModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  async function handleUpdate(): Promise<void> {
    try {
      console.log("Update successful!");
    } catch (error) {
      console.error("Error updating:", error);
    }
  }

  return (
    <>
      {isModalOpen && <ChekModal showModal={showModal} defaultUserId={null} />}
      {editUserModal && (
        <UserModal
          showEditUserModal={showAddUserModal}
          editUserData={{
            name: "",
            employee: "",
            id: 0,
          }}
          handleUpdate={handleUpdate}
          showAddUserModal={() => {}}
        />
      )}
      <div className="bg-[#DFE8F2] shadow-inner w-[100%] h-[87vh]">
        <div className="flex justify-end gap-2 w-full xl:px-2 xl:py-3 2xl:p-3">
          <button onClick={showModal}>
            <div className="flex items-center p-2 gap-2 bg-[#00A794] 2xl:w-[88px] 2xl:h-[30px] xl:w-[75 px] xl:h-[30px] text-white 2x:text-[9px] xl:text-[8px] rounded-[5px] cursor-pointer">
              <IoWallet className="text-white 2xl:text-3xl xl:text-2xl" />
              <p className="">Добавить Счет</p>
            </div>
          </button>

          <button onClick={showAddUserModal}>
            <div className="flex items-center p-2 gap-2 bg-[#0063B9] 2xl:w-[88px] 2xl:h-[30px] xl:w-[80px] xl:h-[30px] text-white text-[8px] rounded-[5px] cursor-pointer">
              <FaCoins className="text-white 2xl:text-3xl xl:text-2xl" />
              <p className="">Добавить Кассу</p>
            </div>
          </button>
        </div>
        <div className="flex-col h-[90%]   rounded-md  overflow-scroll ">
          <div className="w-full flex justify-center items-center">
            {" "}
            <button className="w-[90%] bg-white h-[45px] xl:text-[14px] text-left p-3 flex items-center justify-between rounded-md 2xl:font-bold xl:font-semibold">
              Все кассы <p className="text-green-500">1 200000</p>
            </button>
          </div>
          <div className="w-full p-5  ">
            <div className="flex-col space-y-5">
              <ChashflowInformation />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MenegementLeftPanel;
