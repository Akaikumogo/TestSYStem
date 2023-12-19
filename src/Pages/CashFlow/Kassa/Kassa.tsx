import { useEffect, useState } from "react";
import AddTransaction from "../../../Core/modalButton";
import HeaderTabs from "../../../Core/HeaderTabs";
import { IoNotificationsSharp } from "react-icons/io5";
import { GrTransaction } from "react-icons/gr";
import "../../../Core/search.css";
import { Dropdown, Modal, Tooltip } from "antd";
import AddTransactionModal from "./CashflowComponents/AddTransactionModal";

// import TableHeader from "../../../Core/Tables/TableHeader";
import { useNavigate } from "react-router-dom";
import { TbDotsVertical } from "react-icons/tb";
import { AiOutlineMessage } from "react-icons/ai";
import { MdModeEdit } from "react-icons/md";
import TransactionModal from "./CashflowComponents/TransactionModal";

import Table from "./CashflowComponents/Table";
import { useGetAllWallets } from "../../../API/Cashflow/Cashflow/Wallets";
import { usegetTransactions } from "../../../API/Cashflow/Cashflow/Transactions";
import TableHeader from "../../../Core/Tables/TableHeader";
import EditTransactionModal from "./CashflowComponents/editTransactionModal";
import { BsBank2, BsCashStack } from "react-icons/bs";

interface MyObject {
  description: string;
  id: number;
}

const Kassa = () => {
  // const [filtered, setFiltered] = useState<[]>([]);
  const cashflowId = 3; // replace with your cashflowId

  const {
    data: wallets = [],
    isLoading,
    isError,
  } = useGetAllWallets(cashflowId);
  console.log(isError, isLoading);
  type typeItem = {
    id: number;
    name: string;
    balance: number;
    cashflowId: number;
    currency: number;
    typeWallet: number;
  };

  // const [data1, setData] = useState([
  //   {
  //     id: 1,
  //     date: "2005-12-12T00:00:00Z",
  //     transactionType: 20,
  //     incomeItem: "Аутсорсинг",
  //     typeCategory1: "Аутсорсинг",
  //     typeCategory2: "Аутсорсинг",
  //     typeCategory3: "Аутсорсинг",
  //     typeCategory4: "Аутсорсинг",
  //     balance: 100000,
  //     action: 10,
  //     createdAt: "2023-12-14T09:35:47.417461Z",
  //     walletId: 2,
  //     wallet: null,
  //   },
  //   {
  //     id: 2,
  //     date: "2005-12-15T00:00:00Z",
  //     transactionType: 10,
  //     incomeItem: "oylikг",
  //     typeCategory1: "Аутсорсинг",
  //     typeCategory2: "Аутсорсинг",
  //     typeCategory3: "Аутсорсинг",
  //     typeCategory4: "Аутсорсинг",
  //     balance: 10000,
  //     action: 10,
  //     createdAt: "2023-12-14T09:36:13.303349Z",
  //     walletId: 2,
  //     wallet: null,
  //   },
  //   {
  //     id: 3,
  //     date: "2005-12-20T00:00:00Z",
  //     transactionType: 10,
  //     incomeItem: "marojni",
  //     typeCategory1: "Аутсорсинг",
  //     typeCategory2: "Аутсорсинг",
  //     typeCategory3: "Аутсорсинг",
  //     typeCategory4: "Аутсорсинг",
  //     balance: 30000,
  //     action: 10,
  //     createdAt: "2023-12-14T09:36:31.564299Z",
  //     walletId: 2,
  //     wallet: null,
  //   },
  // ]);

  const navigate = useNavigate();
  const [transactionModal, setTransactionModal] = useState<boolean>(false);
  const [editData, setEditData] = useState<any>();
  const menuItems = (data: any) => {
    const items = [
      {
        key: "2",
        label: (
          <button className="flex items-center gap-2">
            <MdModeEdit />
            Изменить
          </button>
        ),
        onClick: () => {
          setTransactionModal(true);
          setEditData(data);
        },
      },
    ];

    return items;
  };
  const [data, setData] = useState<any>();
  const [isMultipleModalOpen, setMultipleModalOpen] =
    useState<any>("транцакции");
  useEffect(() => {
    if (wallets.length > 0 && !data) {
      setData(wallets[0]);
    }
  }, [wallets, data]);
  const data1 = usegetTransactions(data?.id || 1)?.data || [];
  console.log(data1);
  return (
    <div className="xl:w-[92vw] 2xl:w-[93vw] text-[12px] lg:w-[92vw]  flex flex-col  justify-between  2xl:h-[95vh] xl:h-[92vh] my-auto">
      <AddTransactionModal
        modal={(status: any, close: any) => (
          <Modal
            className=" bg-whi"
            open={status}
            onOk={() => close(false)}
            onCancel={() => close(false)}
            width={615}
            footer={null}
          >
            {/* Add your modal content here */}
            {editData ? (
              //
              <EditTransactionModal
                editedData={editData}
                isMultipleModalOpen={isMultipleModalOpen}
                setMultipleModalOpen={setMultipleModalOpen}
              />
            ) : (
              <TransactionModal
                isMultipleModalOpen={isMultipleModalOpen}
                setMultipleModalOpen={setMultipleModalOpen}
              />
            )}
          </Modal>
        )}
        setEditData={setEditData}
        transactionModal={transactionModal}
        setTransactionModal={setTransactionModal}
        modaltype={setMultipleModalOpen}
      />
      <div className="flex  h-[70px] justify-between p-[1px] xl:mb-[10px] items-center">
        <div className="flex gap-[20px] items-center">
          <h1 className="2xl:text-[30px] xl:text-[24px] lg:text-[24px] font-bold text-[#102769]">
            Касса
          </h1>
          <HeaderTabs
            value={[
              { link: "management", view: "Управление" },
              { link: "cashflow", view: "Касса" },
              { link: "business-trip", view: "Командировка" },
              { link: "report", view: "Отчеты" },
            ]}
            slice={2}
          />
        </div>
        <div className="w-[40%] h-full flex justify-end gap-[10px]   items-center">
          <AddTransaction
            modalState={setTransactionModal}
            component={<GrTransaction />}
            title={
              <p>
                Добавит <br />
                Транзакция
              </p>
            }
            color="#2700A7"
          />
          <button
            onClick={() => navigate("")}
            className="2xl:w-[65px] 2xl:h-[45px] xl:w-[50px] xl:h-[40px] lg:w-[45px] lg:h-[20px] bg-[#005067] xl:rounded-xl lg:rounded-lg flex items-center justify-center lg:text-[18px] 2xl:text-[26px]"
          >
            <IoNotificationsSharp className="text-[#FFBA00]" />
          </button>
        </div>
      </div>
      <div className=" h-[87vh] w-auto flex items-center justify-center gap-[10px]">
        <div className="2xl:w-[20%] xl:w-[22%]   h-[100%]">
          <h1 className="font-bold">Счеты</h1>
          <div
            className="bg-[#DFE8F2]  w-[100%]  overflow-y-auto h-[86vh] rounded-xl"
            style={{ boxShadow: " 0px 0px 18px 0px rgba(0, 0, 0, 0.2) inset" }}
          >
            <div className="flex flex-col items-center gap-3 w-full p-3 ">
              {wallets &&
                wallets.map(
                  (item: typeItem, index: any) => (
                    console.log(item),
                    (
                      <button
                        className={`w-[100%] flex 2xl:px-[10px] 2xl:py-[15px] xl:px-[5px] xl:py-[10px] font-[600] rounded-lg justify-between  ${
                          data === item ? "bg-blue-500 text-white" : "bg-white"
                        }`}
                        style={{
                          boxShadow:
                            data === item
                              ? " 0px 0px 18px 0px rgba(0, 0, 0, 0.2) inset"
                              : "",
                        }}
                        onClick={() => {
                          setData(item);
                        }}
                        key={index}
                      >
                        <h1 className="flex items-center gap-1">
                          {item.typeWallet === 10 ? (
                            <BsCashStack className={"text-[16px]"} />
                          ) : (
                            <BsBank2 className={"text-[18px]"} />
                          )}
                          {item.name}
                        </h1>
                        <h1>
                          {item.balance}{" "}
                          {item.currency === 10
                            ? "$"
                            : item.currency === 20
                            ? "₽"
                            : item.currency === 30
                            ? "сум"
                            : "€"}
                        </h1>
                      </button>
                    )
                  )
                )}
            </div>
          </div>
        </div>
        <div className="w-[80%]  h-[86vh] mt-[45px]  flex flex-col  items-center">
          <TableHeader
            setFiltered={setEditData}
            data={data1}
            filtered={editData}
          />
          <div className="w-full h-[80vh]  ">
            <Table
              walletType={data}
              title="Транзакции"
              data={data1}
              height={50}
              button={(data: MyObject) => (
                <div className="w-full  flex gap-1 items-center justify-end ">
                  <Tooltip
                    title={data.description || "izoh topilmadi"}
                    trigger="click"
                  >
                    <button
                      onClick={() => console.log(data.description)}
                      className="rounded-md   bg-[#D2E0FA]"
                    >
                      <AiOutlineMessage className="text-[#003598]  2xl:text-[24px] xl:text-[16px]" />
                    </button>
                  </Tooltip>
                  <Dropdown
                    menu={{ items: menuItems(data) }}
                    placement="bottomRight"
                    arrow={{ pointAtCenter: true }}
                  >
                    <button className="">
                      <TbDotsVertical />
                    </button>
                  </Dropdown>
                </div>
              )}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Kassa;
