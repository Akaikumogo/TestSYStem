import { useReducer } from "react";
import CashflowReducer from "./CashflowReducer";

const CashflowContext = (initialState: any) => {
  const [cashflowData, dispatchCashflowData] = useReducer(
    CashflowReducer,
    initialState
  );

  const setCashflowData = (value: []) => {
    dispatchCashflowData({
      type: "SET_CASHFLOW_USER_DATAS",
      payload: value,
    });
  };

  return {
    cashflowData,
    setCashflowData,
  };
};

export default CashflowContext;
