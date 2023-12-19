import { FC, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

import AdminSideBar from "./SideBars/AdminSideBar";
import SideBar from "./SideBars/SideBar";

const PageLayout: FC = () => {
  const navigate = useNavigate();
  const userinfo = localStorage.getItem("user");
  const user = userinfo ? JSON.parse(userinfo || "").role : null;
  useEffect(() => {
    const userinfo = localStorage.getItem("user");
    const user = userinfo ? JSON.parse(userinfo || "").user : null;
    if (user === null) {
      navigate("signin");
    }
  }, [navigate, user]);

  return (
    <div className="w-screen h-screen flex">
      {user != null ? user === "Admin" ? <AdminSideBar /> : <SideBar /> : null}
      <Outlet />
    </div>
  );
};

export default PageLayout;
