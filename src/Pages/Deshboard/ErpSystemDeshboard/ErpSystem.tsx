import { FC, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";


const ErpSystem: FC = () => {
  const navigate = useNavigate();
  const userinfo = localStorage.getItem("user");
  const user = userinfo ? JSON.parse(userinfo).user : null;

  useEffect(() => {
    if (user === "admin") {
      navigate("admin-client");
    } else {
      navigate("/");
    }
  }, [user, navigate]);

  return (
    <div className=" w-[100%]  overflow-x-auto">
      <Outlet />
    </div>
  );
};

export default ErpSystem;
