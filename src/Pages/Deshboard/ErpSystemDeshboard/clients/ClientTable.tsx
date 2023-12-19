import { Dropdown, Space, type MenuProps } from "antd";
import { HiDotsVertical } from "react-icons/hi";
import { IoMdSettings } from "react-icons/io";
import { FaPowerOff } from "react-icons/fa6";
// import { ReactNode, useEffect, useState } from 'react';
// import axios from 'axios';
// import config from "../config.json"
import Table from "../../../../Core/Tables/Table";

interface MyObject {
  description: {
    text: string;
  };
  id: number;
}
const ClientTable = () => {
  const tableConfigs = [
    { name: "№", size: "25px" },
    { name: "Ф.И.О", size: "20%" },
    { name: "Компания", size: "15%" },
    { name: "Типы услуг", size: "40%" },
    { name: "Дата регистрации", size: "25%" },
    { name: "Ежемесячная оплата", size: "25%" },
    { name: "Статус", size: "15%" },
    { name: "", size: "5%" },
  ];
  const users = [
    {
      id: 1,
      name: "Bahodirov Azizbek",
      company: "Zahratun",
      services: "POS система, Бухгалтерия, Касса, Budgeti…",
      date: "21.04.2023 11:44",
      Monthly: "5 785 000 сум",
      status: { name: "Активный", type: "adminTableStatus", status: "active" },
    },
    {
      id: 2,
      name: "Rahimov Sherzod",
      company: "OOO Blackstone",
      services: "POS система",
      date: "21.04.2023 11:44",
      Monthly: "5 785 000 сум",
      status: {
        name: "Не активный",
        type: "adminTableStatus",
        status: "nonActive",
      },
    },
    {
      id: 3,
      name: "Bahodirov Azizbek",
      company: "Zahratun",
      services: "POS система, Бухгалтерия, Касса, Budgeti…",
      date: "21.04.2023 11:44",
      Monthly: "5 785 000 сум",
      status: { name: "Активный", type: "adminTableStatus", status: "active" },
    },
  ];
  const items: MenuProps["items"] = [
    {
      label: "Настройки",
      icon: <IoMdSettings />,
      key: "0",
    },
    {
      label: "Деактивировать",
      icon: <FaPowerOff />,
      key: "1",
    },
  ];

  return (
    <div className="w-[99%]  h-[80vh]">
      <Table
        title=""
        tableConfigs={tableConfigs}
        data={users}
        height={50}
        button={(data: MyObject) => (
          <Dropdown
            className="m-4"
            menu={{ items }}
            placement="bottomRight"
            trigger={["click"]}
          >
            <a onClick={() => console.log(data)}>
              <Space>
                <HiDotsVertical />
              </Space>
            </a>
          </Dropdown>
        )}
      />
    </div>
  );
};
export default ClientTable;
