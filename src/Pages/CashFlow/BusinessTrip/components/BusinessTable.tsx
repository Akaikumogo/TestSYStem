import React from "react";
// import { FaCoins } from "react-icons/fa6";

type Table = {
  data: ItemType[];
  tableConfigs: { name: string; size: string }[];
  title: string;
  height: number;
  button: any;
};

type ItemType = {
  startAt: any;
  sector: any;
  user: any;
  id: number;
  name: string;
  date: string;
  walletId: number
};
function transformData(data: any) {
  if (!Array.isArray(data)) {
    // console.error("Data is not an array:", data);
    return [];
  }

  return data.map((item) => {
    return {
      ...item,
    };
  });
}
const formatCreatedAt = (createdAt: string) => {
  const date = new Date(createdAt);
  // Example: format as "DD-MM-YYYY"
  const formattedDate = `${date.getDate().toString().padStart(2, "0")}.${(date.getMonth() + 1)
    .toString()
    .padStart(2, "0")}.${date.getFullYear()}`;

  return formattedDate;
};


const BusinessTable: React.FC<Table> = ({ data, tableConfigs, title, button }) => {
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
              {data?.map((item: ItemType, index) => (
                <div
                  key={index}
                  className="w-[98%]  flex 2xl:h-[47px] xl:h-[30px] items-center rounded-2xl bg-white px-3"
                >
                  <div className="w-[5%]">{index + 1}</div>
                  <div className="flex gap-3 w-[20%]">
                    <h1 className="flex items-center justify-start 2xl:text-[16px] xl:text-[12px] gap-[10px]">
                      {/* <FaCoins className="text-[#E3CF97] 2xl:text-[40px] xl:text-[30px]" />{" "} */}
                      {item.user.fullName}
                    </h1>
                  </div>
                  <div className="w-[15%]">{item.sector.name}</div>
                  <div className="w-[15%]">
                    <p>{formatCreatedAt(item.date)}</p>
                  </div>
                  <div className="w-[15%]">{item.walletId}</div>
                  <div className="w-[10%]">
                    <p>{new Date(item.startAt).getDate()} дн</p>
                  </div>
                  <div className="w-[20%]  flex justify-end">
                    {button(transformData(item))}{" "}
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

export default BusinessTable;
