import { Button, Space, Table } from "antd";
import "./businessRequest.css";
import { MdDone } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";
import { FaArrowLeft } from "react-icons/fa6";
import BusinessTabs from "../components/BusinessTabs";

const { Column, ColumnGroup } = Table;

interface DataType {
  key: React.Key;
  data: string;
  qty: number;
  amount: string;
  age: number;
  confirmed: any;
  tags: string;
}

const BusinessRequests = () => {
  const [data, setData] = useState<DataType[]>([
    {
      key: "1",
      data: "21.04.2022",
      qty: 2,
      amount: "80 000",
      age: 32,
      confirmed: false,
      tags: "400 000 сум",
    },
    {
      key: "-",
      data: "21.04.2022",
      qty: 2,
      amount: "80 000",
      age: 42,
      tags: "400 000 сум",
      confirmed: false,
    },
    {
      key: "3",
      data: "21.04.2022",
      qty: 2,
      amount: "-",
      age: 32,
      confirmed: false,
      tags: "400 000 сум",
    },
    {
      key: "4",
      data: "21.04.2022",
      qty: 2,
      amount: "80 000",
      age: 32,
      tags: "400 000 сум",
      confirmed: false,
    },
  ]);

  const [confirmed, setConfirmed] = useState(false);

  const handleConfirm = (event: React.MouseEvent<HTMLButtonElement>) => {
    const key = event.currentTarget.dataset.key;
    if (key) {
      const newData = data.map((item) => {
        if (item.key === key) {
          return { ...item, confirmed: true };
        }
        return item;
      });
      setData(newData);
      setConfirmed(true);
    }
  };

  const handleReject = () => {
    setConfirmed(false);
  };

  return (
    <div className="overflow-x-auto h-[100%]">
      <div className="w-[90vw]">
        <Table
          dataSource={data}
          bordered={false}
          className="shadow-md shadow-[#00000024]"
          pagination={false}
        >
          <Column title="Дата" dataIndex="data" key="data" className="data" />
          <ColumnGroup className="w-[10px] text-[13px]  " title="Завтрак">
            <Column title="Кол-во" dataIndex="qty" key="qty" />
            <Column title="Сумма" dataIndex="amount" key="amount" />
          </ColumnGroup>
          <ColumnGroup title="Обед">
            <Column
              className="text-[12px]"
              title="Кол-во"
              dataIndex="qty"
              key="qty"
            />
            <Column title="Сумма" dataIndex="amount" key="amount" />
          </ColumnGroup>
          <ColumnGroup title="Ужин">
            <Column title="Кол-во" dataIndex="qty" key="qty" />
            <Column title="Сумма" dataIndex="amount" key="amount" />
          </ColumnGroup>
          <ColumnGroup title="Гостиница">
            <Column title="Кол-во" dataIndex="qty" key="qty" />
            <Column title="Сумма" dataIndex="amount" key="amount" />
          </ColumnGroup>
          <ColumnGroup title="Дорожный расход">
            <Column title="Описание" dataIndex="qty" key="qty" />
            <Column title="Котегория" dataIndex="amount" key="amount" />
            <Column title="Сумма" dataIndex="amount" key="amount" />
          </ColumnGroup>
          <ColumnGroup title="Прочи расход">
            <Column title="Кол-во" dataIndex="qty" key="qty" />
            <Column title="Сумма" dataIndex="amount" key="amount" />
          </ColumnGroup>

          <Column
            title="Итог сумма"
            dataIndex="tags"
            key="tags"
            className="sum"
          />
          <Column
            title=""
            key="action"
            render={(_: any, _record: DataType) => (
              <Space size="small" className="w-full flex justify-center gap-4">
                {!_record.confirmed ? (
                  <div className="flex gap-4">
                    <button
                      onClick={(e) => handleConfirm(e)}
                      data-key={_record.key}
                      className="flex items-center gap-2 w-[120px] p-2 bg-[#0089FF] rounded-md text-white h-[30px]"
                    >
                      <MdDone className="font-bold text-[40px]" />{" "}
                      <p className="text-[13px]">Подтвердить</p>
                    </button>
                    <Button
                      disabled={true}
                      className="flex items-center justify-center gap-2 w-[40px] p-2 bg-[#890000] rounded-md text-white h-[30px]"
                    >
                      <IoMdClose className="text-[40px]" />
                    </Button>
                  </div>
                ) : (
                  <div className="w-[100%]">
                    <button
                      onClick={handleReject}
                      className="rounded-full p-1 bg-[#057600] text-white"
                    >
                      <MdDone className="font-bold text-[24px]" />{" "}
                    </button>
                  </div>
                )}
              </Space>
            )}
          />
        </Table>
      </div>
    </div>
  );
};

export default BusinessRequests;
