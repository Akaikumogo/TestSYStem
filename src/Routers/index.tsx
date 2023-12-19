import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import PageLayout from "../Layouts/PageLayout";
import Cashflow from "../Pages/CashFlow/Cashflow";
import Kassa from "../Pages/CashFlow/Kassa/Kassa";
import Management from "../Pages/CashFlow/Management/Management";
import Report from "../Pages/CashFlow/Report/Report";
import BusinessTrip from "../Pages/CashFlow/BusinessTrip/BusinesTrip";
import SignIn from "../Pages/Auth/SignIn";
import ErpSystem from "../Pages/Deshboard/ErpSystemDeshboard/ErpSystem";
import Clients from "../Pages/Deshboard/ErpSystemDeshboard/clients/Clients";
// import BusinessRequests from "../Pages/CashFlow/BusinessTrip/page/BusinessRequests";
import Genral from "../Pages/CashFlow/BusinessTrip/page/Genral";
import Notification from "../Pages/CashFlow/Notification";
import Navigate from "../Navigate";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PageLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/cashflow",
        element: <Cashflow />,
        children: [
          { path: "management", element: <Management /> },

          { path: "", element: <Navigate /> },

          { path: "cashflow", element: <Kassa /> },
          { path: "report", element: <Report /> },
          { path: "business-trip", element: <BusinessTrip /> },
          { path: "business-requests", element: <Genral /> },
          {
            path: "business-trip/notification",
            element: <Notification />,
          },
        ],
      },
      {
        path: "/erpdashboard",
        element: <ErpSystem />,
        children: [{ path: "admin-client", element: <Clients /> }],
      },
    ],
  },
  { path: "/signin", element: <SignIn /> },
  //   { path: "*", element: <Error /> },
]);

export default router;
