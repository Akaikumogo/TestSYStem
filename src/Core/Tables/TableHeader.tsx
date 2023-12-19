import { Tabs } from "antd";
import type { TabsProps } from "antd";

import { DatePicker, Space } from "antd";

const { RangePicker } = DatePicker;
type TableHeader = {
  setFiltered: any;
  data: any;
  filtered: any;
};
const TableHeader = (props: TableHeader) => {
  const { data, setFiltered } = props;
  function formatDate(inputDate: string): string {
    const [month, day, year] = inputDate.split(".");
    return `${day}.${month}.${year}`;
  }
  function formatNumberWithSpaces(number: number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  }
  const dateFilterFunction = (e: any) => {
    const started = new Date(
      formatDate(
        e[0].$d
          .toLocaleDateString("en-US", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
          })
          .replace(/\//g, ".")
      )
    );

    const ended = new Date(
      formatDate(
        e[1].$d
          .toLocaleDateString("en-US", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
          })
          .replace(/\//g, ".")
      )
    );

    filteredbyDate(started, ended);
  };

  const filteredbyDate = (startDate: any, endDate: any) => {
    console.log(data);
    setFiltered(
      data.filter((user: any) => {
        const userDate = new Date(user.date);
        return userDate >= startDate && userDate <= endDate;
      })
    );
  };
  const onChange = (key: string) => {
    if (Array.isArray(data)) {
      if (key === "plus") {
        setFiltered(data.filter((user: any) => user.transaction.type === true));
      } else if (key === "minus") {
        setFiltered(
          data.filter((user: any) => user.transaction.type === false)
        );
      } else {
        setFiltered([...data]);
      }
    }
  };
  const items: TabsProps["items"] = [
    {
      key: "All",
      label: "Все",
    },
    {
      key: "plus",
      label: "Приходы",
    },
    {
      key: "minus",
      label: "Расходы",
    },
  ];

  return (
    <div
      className="tableeee w-full 2xl:h-[50px] xl:h-[40px]   bg-[#E8F3FF] shadow-inherit rounded-2xl"
      style={{ boxShadow: "0px 5px 10px 2px rgba(34, 60, 80, 0.2) inset" }}
    >
      <div className="  w-full h-full  xl:text-[12px] px-[10px] flex items-center">
        <div className="  w-[25%] flex items-center   h-[100%]">
          <Tabs
            defaultActiveKey="1"
            size="small"
            className=" h-[100%] mx-[10px]"
            items={items}
            onChange={onChange}
          />
        </div>
        <div className=" w-[35%]   h-full flex justify-center items-center">
          <Space direction="vertical" size={5}>
            <RangePicker
              format={"DD.MM.YYYY"}
              size="small"
              onChange={(e) => dateFilterFunction(e)}
            />
          </Space>
        </div>
        <div className="w-[45%]    h-full flex justify-end  gap-[10px]">
          <div className="w-[50%]  ">
            <div className="w-full h-full   flex items-center justify-start gap-[5px]">
              <h1 className="font-semibold">Приход:</h1>
              <h1 className=" text-[#00AC5F] font-semibold">
                {formatNumberWithSpaces(
                  data.reduce((sum: any, currentData: any) => {
                    if (currentData.transactionType === 10) {
                      return sum + currentData.balance;
                    } else {
                      return sum;
                    }
                  }, 0)
                )}{" "}
                сум
              </h1>
            </div>
          </div>
          <div className="w-[50%]  ">
            <div className="w-full h-full  flex items-center justify-start gap-[5px]">
              <h1 className="font-semibold">Расход:</h1>
              <h1 className=" text-[#DB0000] font-semibold">
                {formatNumberWithSpaces(
                  data.reduce((sum: any, currentData: any) => {
                    if (currentData.transactionType === 20) {
                      return sum + currentData.balance;
                    } else {
                      return sum;
                    }
                  }, 0)
                )}{" "}
                сум
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableHeader;
