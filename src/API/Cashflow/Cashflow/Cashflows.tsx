// getCashflows.js
import { useQuery } from "react-query";
import api from "../../index";

const getCashflows = async (cashflowId: number) => {
  const response = await api.get(
    `api/wallets/Get-All-Wallet-in-Cashflow?cashflowId=${cashflowId}`
  );
  return response.data;
};

export const useGetAllWallets = (cashflowId: number) => {
  return useQuery([cashflowId], () => getCashflows(cashflowId));
};
