import React from "react";
import { format } from "date-fns"; // Import date-fns for date formatting

type Table = {
  data: ItemType[];

  title: string;
  height: number;
  button: any;
  walletType: any;
};

type ItemType = {
  id: number;
  date: string;
  transactionType: number;
  incomeItem: string;
  typeCategory1: string;
  typeCategory2: string;
  typeCategory3: string;
  typeCategory4: string;
  balance: number;
  action: number;
  createdAt: string;
  walletId: number;
  wallet: any;
  description: any; // You may want to replace 'any' with a more specific type if possible
};
function formatNumberWithSpaces(number: number | undefined | null) {
  if (number === undefined || number === null) {
    return ""; // Or handle the case appropriately
  }

  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}
const Table: React.FC<Table> = ({
  data,

  title,
  walletType,
  button,
}) => {
  return (
    <>
      <div className="w-full  max-h-[99%] lg:text-[10px]  2xl:text-[12px] xl:text-[12px] md:text-[8px] flex items-center flex-col">
        <div className="w-full py-[5px]">
          <h1 className="text-[16px]">{title}</h1>
        </div>
        <div className="w-full  overflow-x-auto min-h-[100px] text-start max-h-full pb-[10px] bg-[#DEEFFF] rounded-md">
          <div className="w-full ">
            <div className="w-[100%]     sticky z-10 bg-[#DEEFFF] top-[0px]  flex items-center ">
              <div className="w-[100%] border mx-[10px] px-[10px] text-start     py-[5px] flex items-center gap-3 ">
                <h1 className="w-[5%] border border-black">№</h1>
                <h1 className="w-[12%] border border-black">Дата</h1>
                <h1 className="w-[13%] border border-black">Приход/Расход</h1>
                <h1 className="w-[10%] border border-black">Основание</h1>
                <h1 className="w-[10%]  border border-black">Категория 1</h1>
                <h1 className="w-[10%] border border-black">Категория 2</h1>
                <h1 className="w-[10%] border border-black">Категория 3</h1>
                <h1 className="w-[10%] border border-black">Категория 4</h1>
              </div>
            </div>
            <div className="w-full px-[10px] h-auto xl:max-h-[78vh] overflow-y-auto">
              <div className="w-full h-full flex flex-col gap-[5px]   items-center">
                {data.map((item: ItemType, index) => (
                  <div
                    key={index}
                    className="w-[100%] relative  mx-[10px] px-[10px] 2xl:h-[30px] xl:h-[25px] border  bg-white rounded-md top-0 2xl:py-[5px] flex  items-center gap-3"
                  >
                    <h1 className="w-[5%] border border-black ">{index + 1}</h1>
                    <h1 className="w-[12%] border border-black ">
                      {format(new Date(item.date), "dd.MM.yyyy HH:mm")}
                    </h1>
                    <h1
                      className={`w-[13%] border border-black   ${
                        item.transactionType === 10
                          ? "text-green-500"
                          : "text-red-500"
                      }`}
                    >
                      {item.transactionType === 10
                        ? `+${formatNumberWithSpaces(item.balance)}${
                            walletType?.currency === 10
                              ? "$"
                              : walletType?.currency === 20
                              ? "₽"
                              : walletType?.currency === 30
                              ? "сум"
                              : "€"
                          }`
                        : `-${formatNumberWithSpaces(item.balance)}${
                            walletType?.currency === 10
                              ? "$"
                              : walletType?.currency === 20
                              ? "₽"
                              : walletType?.currency === 30
                              ? "сум"
                              : "€"
                          }`}
                    </h1>
                    <h1
                      className="w-[10%] truncate  border border-black  font-semibold  "
                      title={item.incomeItem}
                    >
                      {item.incomeItem}
                    </h1>
                    <h1
                      className="w-[10%] border border-black truncate  "
                      title={item.typeCategory1}
                    >
                      {item.typeCategory1}
                    </h1>
                    <h1
                      className="w-[10%] border border-black  truncate  "
                      title={item.typeCategory2}
                    >
                      {item.typeCategory1}
                    </h1>
                    <h1
                      className="w-[10%] border border-black truncate  "
                      title={item.typeCategory3}
                    >
                      {item.typeCategory1}
                    </h1>
                    <h1
                      className="w-[10%] border border-black truncate  "
                      title={item.typeCategory4}
                    >
                      {item.typeCategory1}
                    </h1>

                    <div className="w-[5%] border border-black absolute  right-[25px]   ">
                      {button(item)}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Table;
