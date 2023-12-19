import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./Routers/index.tsx";
import { QueryClient, QueryClientProvider } from "react-query";
import GlobalProvider from "./context/CashFlowModule/GlobalContext.tsx";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import { PrimeReactProvider } from "primereact/api";
const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById("root")!).render(
  <GlobalProvider>
    <PrimeReactProvider value={{ unstyled: false }}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router}></RouterProvider>
      </QueryClientProvider>
    </PrimeReactProvider>
  </GlobalProvider>
);
