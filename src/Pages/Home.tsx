import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const userinfo = localStorage.getItem("user");
  const user = userinfo ? JSON.parse(userinfo || "").role : null;
  const navigate = useNavigate();
  console.log(user);
  useEffect(() => {
    user === "Admin"
      ? navigate("erpdashboard")
      : navigate("/cashflow/management");
  }, []);

  return <div>Home</div>;
};

export default Home;
