
import { useReducer } from "react";
import ManagementReducer from "./ManagementReducer";

const ManagementContext = (initialState: any) => {
  const [cashflowData, dispatchCashflowData] = useReducer(
    ManagementReducer,
    initialState
  );

  const setCashflowData = (value: Object[]) => {
    
    dispatchCashflowData({
      type: "SET_CASHFLOW_DATA",
      payload: value
    })
  }


  return {
    cashflowData,
    setCashflowData,
  };
};

export default ManagementContext