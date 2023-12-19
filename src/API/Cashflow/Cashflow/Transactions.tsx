import { useQuery } from "react-query";
import api from "../../index";

const getTransactions = async (cashflowId: number) => {
  const response = await api.get(
    `/api/wallets/Transaction-and-Exchange?walledId=${cashflowId}`
  );
  return response.data;
};

export const usegetTransactions = (cashflowId: number) => {
  return useQuery([cashflowId], () => getTransactions(cashflowId));
};
