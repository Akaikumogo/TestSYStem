import React from "react";
import { FaCoins } from "react-icons/fa6";

type Table = {
  data: object[];
  tableConfigs: { name: string; size: string }[];
  title: string;
  height: number;
  button: any;
};

const Table: React.FC<Table> = ({
  data,
  tableConfigs,
  button,
  height,
  title,
}) => {
  const transformedData = data.map((item) => {
    return Object.entries(item).map(([key, value]) => {
      const newObj: Record<string, any> = {};
      newObj[key] = value;
      return newObj;
    });
  });
  function transformData(data: []) {
    const result: Record<string, any> = {};
    data.forEach((item) => {
      const key = Object.keys(item)[0];
      result[key] = item[key];
    });
    return result;
  }

  function formatNumberWithSpaces(number: number | undefined | null) {
    if (number === undefined || number === null) {
      return ""; // Or handle the case appropriately
    }

    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  }

  return (
    <div className="w-full 2xl:text-[16px]   max-h-[99%]  xl:text-[12px] flex  items-center flex-col">
      <div className="w-full py-[5px]">
        <h1>{title}</h1>
      </div>
      <div className=" w-full overflow-x-auto min-h-[100px]   text-start max-h-full   bg-[#DEEFFF] rounded-2xl">
        <div className="w-full  ">
          <div className="w-full px-[20px] sticky z-10 bg-[#DEEFFF] top-0 py-[10px] flex items-center gap-[20px]">
            {tableConfigs.map((table, idx) => (
              <div
                style={{ width: table.size }}
                className=" text-start"
                key={idx}
              >
                {table.name}
              </div>
            ))}
          </div>
          <div className="w-[100%]  py-4 px-2 h-auto xl:max-h-[78vh] overflow-y-auto">
            <div className="w-full h-full  flex flex-col  gap-[10px] items-center">
              {transformedData.map((datas: any, idx: number) => (
                <div
                  key={idx}
                  className={`w-full  relative rounded-xl  px-[15px] mx-auto  items-center gap-[20px] bg-white  flex  `}
                  style={{
                    height: `${height}px`,
                  }}
                >
                  {Array.isArray(datas) &&
                    datas.map((data: object, index: number) =>
                      Object.values(data)[0]?.type != "hidden" ? (
                        <div
                          style={{ width: tableConfigs[index].size }}
                          className="text-start "
                          key={index}
                        >
                          {typeof Object.values(data)[0] === "object" ? (
                            Object.values(data)[0]?.type === "cashflowName" ? (
                              <h1 className="flex items-center justify-start 2xl:text-[16px] xl:text-[12px] gap-[10px]">
                                <FaCoins className="text-[#E3CF97] 2xl:text-[40px] xl:text-[30px]" />{" "}
                                {Object.values(data)[0]?.name}
                              </h1>
                            ) : Object.values(data)[0]?.type === "UserName" ? (
                              <h1 className="flex items-center justify-start 2xl:text-[16px] xl:text-[12px] gap-[10px]">
                                {Object.values(data)[0]?.link ? (
                                  <img
                                    className="w-[55px] h-[55px] rounded-full"
                                    src={Object.values(data)[0]?.link}
                                    alt=""
                                  />
                                ) : (
                                  <img
                                    className="w-[50px] h-[50px]  rounded-full"
                                    src={
                                      "https://api-private.atlassian.com/users/aa7543e682dff486562017fe2fedc6c0/avatar"
                                    }
                                    alt=""
                                  />
                                )}
                                {Object.values(data)[0]?.name}
                              </h1>
                            ) : Object.values(data)[0]?.type ===
                              "adminTableStatus" ? (
                              <h1
                                className={`${
                                  Object.values(data)[0]?.status === "active"
                                    ? "text-green-500"
                                    : "text-red-500 "
                                } font-bold`}
                              >
                                {formatNumberWithSpaces(
                                  Object.values(data)[0]?.name
                                )}{" "}
                              </h1>
                            ) : (
                              <h1
                                className={`${
                                  Object.values(data)[0]?.type
                                    ? "text-green-500"
                                    : "text-red-500 "
                                } font-bold`}
                              >
                                {Object.values(data)[0]?.type ? "+" : "-"}
                                {formatNumberWithSpaces(
                                  Object.values(data)[0]?.summ
                                )}{" "}
                                so'm
                              </h1>
                            )
                          ) : (
                            <h1 className="mx-auto">
                              {Object.values(data)[0]}
                            </h1>
                          )}
                        </div>
                      ) : (
                        <React.Fragment key={index} />
                      )
                    )}
                  <div
                    style={{
                      width: tableConfigs[tableConfigs.length - 1].size,
                    }}
                    className=" sticky left-0"
                  >
                    {button(transformData(datas))}
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

export default Table;
