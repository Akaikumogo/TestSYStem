import { Input, Select } from "antd";
import BreakUserReport from "./BreakUserReport";
import { useState } from "react";
import TextArea from "antd/es/input/TextArea";

const SmashModal = () => {
  const [rowCount, setRowCount] = useState(1);

  const addRow = () => {
    setRowCount((prevCount) => prevCount + 1);
  };

  return (
    <div>
      <div className="flex items-center justify-center gap-5">
        <p className="font-semibold ">Сумма</p>
        <Input style={{ width: 1100, height: 50 }} placeholder="Basic usage" />
      </div>
      <ul className="flex justify-start gap-[280px] mt-5 mb-4 pl-10">
        <li>Контрагент</li>
        <li>Статья</li>
        <li>Сумма</li>
        <li>%</li>
        <li>Направление</li>
      </ul>
      <div className="space-y-4">
        {[...Array(rowCount)].map((_, index) => (
          <div key={index} className="flex items-center gap-3">
            <p>{index + 1}</p>
            <BreakUserReport />
          </div>
        ))}
      </div>

      <button className="mt-5 text-[#0089FF]" onClick={addRow}>
        Разбить еще +
      </button>
      <div className="w-full ">
        <div className="flex justify-end w-[78%]">
          <p>Осталось распределить 0</p>
        </div>
        <div className="flex gap-3 items-center space-y-3 justify-end w-[80%]">
          <p className="font-semibold">Итого:</p>
          <Input
            style={{ width: 150, height: 45 }}
            className=""
            placeholder="0"
          />
          <p>100</p>
        </div>
      </div>
      <div className="space-y-3">
        <div className="flex gap-5">
          <p>Со счета</p>
          <Select
            className=""
            showSearch
            style={{ width: 300, height: 45 }}
            placeholder="-Выберите сектор-"
            optionFilterProp="children"
            filterOption={(input, option) =>
              (option?.label?.toLowerCase() ?? "").includes(input.toLowerCase())
            }
            filterSort={(optionA, optionB) =>
              (optionA?.label?.toLowerCase() ?? "").localeCompare(
                optionB?.label?.toLowerCase() ?? ""
              )
            }
            options={[
              {
                value: "1",
                label: "Not Identified",
              },
              {
                value: "2",
                label: "Closed",
              },
              {
                value: "3",
                label: "Communicated",
              },
              {
                value: "4",
                label: "Identified",
              },
            ]}
          />
        </div>
        <div className="flex gap-12">
          <p>Дата</p>
          <Select
            className=""
            showSearch
            style={{ width: 300, height: 45 }}
            placeholder="-Выберите сектор-"
            optionFilterProp="children"
            filterOption={(input, option) =>
              (option?.label?.toLowerCase() ?? "").includes(input.toLowerCase())
            }
            filterSort={(optionA, optionB) =>
              (optionA?.label?.toLowerCase() ?? "").localeCompare(
                optionB?.label?.toLowerCase() ?? ""
              )
            }
            options={[
              {
                value: "1",
                label: "Not Identified",
              },
              {
                value: "2",
                label: "Closed",
              },
              {
                value: "3",
                label: "Communicated",
              },
              {
                value: "4",
                label: "Identified",
              },
            ]}
          />
        </div>
        <div className="flex gap-3">
          <p>Описание</p>
          <TextArea style={{ width: 300 }} rows={2} />
        </div>
      </div>
    </div>
  );
};

export default SmashModal;
