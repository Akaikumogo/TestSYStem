// userIndex.tsx
import api from "../..";

// localStorage.setItem(
//   "Token",
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJJZCI6IjIiLCJyb2xlIjoiVXNlciIsInVuaXF1ZV9uYW1lIjoiU2FydmFyYmVrIFhhenJhdG92IiwibmJmIjoxNzAyODg3NDM4LCJleHAiOjE3MDU1NjU4MzgsImlhdCI6MTcwMjg4NzQzOCwiaXNzIjoiaHR0cHM6Ly9sb2NhbGhvc3Q6NzA4MSIsImF1ZCI6IkVSUC1TeXN0ZW1fU2VydmVyIn0.T5BiadmIRi72Il-DH4ZBBrEPo5TZIeS7g0WmESvNWAs"
// );

const config = {
  headers: {
    Authorization: `Bearer ${localStorage.getItem("Token")}`,
    "Content-Type": "application/json",
  },
};

const userIndex = () => {
  const getUserList = () =>
    api.get(
      "http://103.125.217.96:83/api/cashflows/Get-All-Cashflow-in-User",
      config
    );

  const getUserDelete = (userId: number) =>
    api.delete(`http://103.125.217.96:83/api/cashflows/${userId}`, config);

  const getUserUpdate = (
    userId: number,
    data: { name: string; account: string }
  ) =>
    api.put(`http://103.125.217.96:83/api/cashflows/${userId}`, data, config);

  const getUserPost = (data: { name: string; employee: string }) =>
    api.post("http://103.125.217.96:83/api/cashflows", data, config);

  const getUserCheck = (userId: number) =>
    api.get(`http://103.125.217.96:83/api/cashflows/${userId}`, config);

  const createUser = (data: {
    name: string;
    cashflowId: number;
    currency: number;
    typeWallet: number;
  }) => api.post("http://103.125.217.96:83/api/wallets", data, config);

  const getExchangeList = () =>
    api.get("http://103.125.217.96:83/api/exchange-rates");

  const createSwap = (data: {
    currency: number;
    buyRate: number;
    saleRate: number;
  }) => api.post("http://103.125.217.96:83/api/exchange-rates", data, config);

  const exchangeData = (startAt: string, endAt: string) =>
    api.get(
      `http://103.125.217.96:83/api/exchange-rates/filter?startAt=${startAt}&endAt=${endAt}`,
      config
    );
  const getWalletId = (id: number) =>
    api.get(`http://103.125.217.96:83/api/wallets/${id}`, config);

  return {
    getUserList,
    getUserDelete,
    getUserUpdate,
    getUserPost,
    getUserCheck,
    createUser,
    getExchangeList,
    createSwap,
    exchangeData,
    getWalletId,
  };
};

export default userIndex;
