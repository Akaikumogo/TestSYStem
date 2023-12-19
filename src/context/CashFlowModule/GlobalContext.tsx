import { createContext } from "react";
import ManagementContext from "./Management/ManagementContext";
import CashflowContext from "./Cashflow/CashflowContext";
const initialState: any = {
  userInformations: {},
  dashboard: {},
  posSystemModule: {},
  wmsSystemModule: {},
  hrModule: {},
  budgetingModule: {},
  cashFlowModule: {
    management: {
      cashFlowData: [
        {
          id: 1,
          name: "kassa jondor",
          wallets: [
            { id: 1, name: "schet 112321312", balance: 1000000 },
            { id: 2, name: "schet 112321312", balance: 500000 },
          ],
          cashflowBalance: 1500000,
        },
      ],
    },
    cashFlow: {
      cashfowTable: [],
    },
    businessTrip: {},
    report: {},
  },
  logisticsModule: {},
  crmModule: {},
  accountantModule: {},
  scModule: {},
};

export const GlobalContext = createContext(initialState);

export default function GlobalProvider({ children }: any) {
  const managementValues = ManagementContext(
    initialState.cashFlowModule.management
  );
  const cashFlowValues = CashflowContext(initialState.cashFlowModule.cashFlow);
  return (
    <GlobalContext.Provider
      value={{
        ...managementValues,
        ...cashFlowValues,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
