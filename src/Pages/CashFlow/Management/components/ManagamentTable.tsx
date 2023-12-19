import { Button, Dropdown } from "antd";
import React from "react";
import { FaCoins } from "react-icons/fa6";
import { TbDotsVertical } from "react-icons/tb";

type Table = {
  data: ItemType[];
  tableConfigs: { name: string; size: string }[];
  title: string;
  height: number;
  menuItems: any;
};

type ItemType = {
  employee: string;
  numberOfWallet: any;
  name: string;
  id: number;
  date: string;
  createdAt: string;
  walletId: number;
  wallet: any;
};

const formatCreatedAt = (createdAt: string) => {
  const date = new Date(createdAt);
  const formattedDate = `${date.getFullYear()}-${(date.getMonth() + 1)
    .toString()
    .padStart(2, "0")}-${date.getDate().toString().padStart(2, "0")} ${date
    .getHours()
    .toString()
    .padStart(2, "0")}:${date.getMinutes().toString().padStart(2, "0")}:${date
    .getSeconds()
    .toString()
    .padStart(2, "0")}`;
  return formattedDate;
};

const ManagamentTable: React.FC<Table> = ({
  data,
  tableConfigs,
  title,
  menuItems,
}) => {
  return (
    <div className="w-full 2xl:text-[16px] max-h-[99%] xl:text-[12px] flex items-center flex-col">
      <div className="w-full py-[5px]">
        <h1>{title}</h1>
      </div>
      <div className="w-full overflow-x-auto min-h-[100px] text-start max-h-full bg-[#DEEFFF] rounded-2xl">
        <div className="w-full">
          <div className="w-full px-[20px] sticky z-10 bg-[#DEEFFF] top-0 py-[10px] flex items-center gap-[20px]">
            <div className="flex w-[99%]">
              {tableConfigs.map((table, idx) => (
                <div
                  style={{ width: table.size }}
                  className="text-start"
                  key={idx}
                >
                  {table.name}
                </div>
              ))}
            </div>
          </div>
          <div className="w-[100%] py-4  h-auto xl:max-h-[78vh] overflow-y-auto">
            <div className="w-full h-full flex flex-col gap-[10px] items-center">
              {data.map((item: ItemType, index) => (
                <div
                  key={index}
                  className="w-[99%]  flex  h-[80px] items-center rounded-md bg-white px-3 "
                >
                  <div className="w-[5%]">{index + 1}</div>
                  <div className="flex items-center gap-3 w-[20%]">
                    <h1 className="flex items-center justify-start 2xl:text-[16px] xl:text-[12px] gap-[10px]">
                      <FaCoins className="text-[#E3CF97] 2xl:text-[40px] xl:text-[30px]" />{" "}
                    </h1>
                    {item.name}
                  </div>
                  <div className="w-[20%]">{item.numberOfWallet}</div>
                  <div className="w-[25%]">
                    <p>{formatCreatedAt(item.createdAt)}</p>
                  </div>
                  <div className="w-[25%]">{item.employee}</div>
                  <div className="w-[5%]  flex justify-end">
                    <Dropdown
                      menu={{ items: menuItems(item) }}
                      placement="bottomRight"
                      arrow={{ pointAtCenter: true }}
                    >
                      <Button className="border-0">
                        <TbDotsVertical />
                      </Button>
                    </Dropdown>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManagamentTable;
