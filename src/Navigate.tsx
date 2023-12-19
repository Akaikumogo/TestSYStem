import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Navigate = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("management");
  }, []);

  return <div> {""}</div>;
};

export default Navigate;
