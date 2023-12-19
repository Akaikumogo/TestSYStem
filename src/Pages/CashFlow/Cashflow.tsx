import { FC } from "react";
import { Outlet } from "react-router-dom";

const Cashflow: FC = () => {
  return (
    <div className="w-[100%] p-5 xl:pl-[15px] overflow-x-auto   ">
      <Outlet />
    </div>
  );
};

export default Cashflow;
