import { Menu, MenuProps } from "antd";
import React, { useEffect, useState } from "react";
import { BsCashStack } from "react-icons/bs";
import { FaCoins } from "react-icons/fa6";
import userIndex from "../../../../API/Cashflow/Managements/userIndex";

interface Wallet {
  currency: string;
  name: string;
  balance: number;
}

interface Cashflow {
  id: number;
  name: string;
  wallets: Wallet[];
}

type MenuItem = Required<MenuProps>["items"][number];

const { getUserList } = userIndex();

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: "group",
  currency?: string
): MenuItem {
  return {
    key,
    icon,
    children,
    label: (
      <div className="flex justify-between">
        {label}
        {currency && <p>{currency}</p>}
      </div>
    ),
    type,
  } as MenuItem;
}

const ChashflowInformation = () => {
  const [wallets, setWallets] = useState<Cashflow[]>([]);

  const fetchUsers = async () => {
    try {
      const response = await getUserList();
      console.log("cashflow", response.data);
      setWallets(response.data || []);
    } catch (error) {
      console.error("Error fetching visitors:", error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const menuItems = wallets.map((cashflow: Cashflow) => {
    const cashflowName = cashflow.name;
    const cashflowBalance = cashflow.wallets.reduce(
      (total, wallet) => total + wallet.balance,
      0
    );

    return getItem(
      <div className="w-full flex justify-between">
        {cashflowName} <p>{cashflowBalance} сум</p>
      </div>,
      `sub${cashflow.id}`,
      <FaCoins className="text-red-500" />,
      cashflow.wallets.map((wallet: Wallet) => {
        const currencyNumber = Number(wallet.currency);

        return getItem(
          <div className="w-full flex items-center justify-between">
            <div className="flex items-center gap-1">
              <BsCashStack className="text-[#2F9F73]" />
              {wallet.name}
            </div>
            <div>
              {wallet.balance}{" "}
              {currencyNumber === 10
                ? "$"
                : currencyNumber === 20
                ? "₽"
                : currencyNumber === 30
                ? "сум"
                : "€"}
            </div>
          </div>,
          `${cashflow.id}-${wallet.name}`
        );
      })
    );
  });

  return (
    <div className="w-[100%]">
      <Menu
        onClick={(e) => console.log("click ", e)}
        style={{ width: "100%" }}
        defaultSelectedKeys={["sub1"]}
        defaultOpenKeys={wallets.map((cashflow) => `sub${cashflow.id}`)}
        mode="inline"
        items={menuItems}
      />
    </div>
  );
};

export default ChashflowInformation;
