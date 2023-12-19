import HeaderTabs from "../../../Core/HeaderTabs";
import { FaFilePen } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { IoNotificationsSharp } from "react-icons/io5";

import BusinessReportModal from "./components/BusinessReportModal";
import BusinessFilter from "./components/BusinessFilter";
import BusinessApply from "./components/BusinessApplyModal";
import { useNavigate } from "react-router-dom";
import BusinessTable from "./components/BusinessTable";
import BusinessUser from "../../../API/businesstrip/BusinessUser";

const BusinessTrip = () => {
  const navigate = useNavigate();
  const [reportModal, setReportModal] = useState<boolean>(false);
  const handleReoport = () => {
    setReportModal(!reportModal);
  };
  const [applyModal, setApplyModal] = useState<boolean>(false);
  const handleApply = () => {
    setApplyModal(!applyModal);
  };
  const [users, setUsers] = useState<any[]>([]);
  const { getBusinessUserList } = BusinessUser();

  const tableConfigs = [
    { name: "№", size: "5%" },
    { name: "Сотрудник", size: "20%" },
    { name: "Заведение", size: "15%" },
    { name: "Заявил", size: "15%" },
    { name: "Дано", size: "15%" },
    { name: "Дедлайн", size: "10%" },
    { name: "", size: "20%" },
  ];


  const fetchUsers = async () => {
    try {
      const response = await getBusinessUserList();
      console.log("ma'lumotlar", response.data);

      setUsers(response.data || []);
    } catch (error) {
      console.error("Error fetching visitors:");
    }
  };
  useEffect(() => {
    fetchUsers(); // <-- Call the function here
  }, []);
  return (
    <>
      {reportModal && <BusinessReportModal handleReoport={handleReoport} />}
      {applyModal && <BusinessApply handleApply={handleApply} />}
      <div className="xl:w-[92vw] 2xl:w-[93vw]  mt-[10px]  flex flex-col  justify-between  h-[95vh] my-auto">
        <div className="flex  h-[70px] justify-between p-[1px] items-center">
          <div className="flex gap-[20px] items-center">
            <h1 className="2xl:text-[30px] xl:text-[25px] font-bold text-[#102769]">
              Касса
            </h1>
            <HeaderTabs
              value={[
                { link: "management", view: "Управление" },
                { link: "cashflow", view: "Касса" },
                { link: "business-trip", view: "Командировка" },
                { link: "report", view: "Отчеты" },
              ]}
              slice={2}
            />
          </div>
          <div className="w-[40%] h-full flex justify-end gap-[10px]   items-center">
            <button
              onClick={handleApply}
              className="2xl:w-[105px] xl:w-[90px] h-[42px] bg-[#CF5700] text-white rounded-md flex justify-center items-center p-2 "
            >
              <div className="w-full flex items-center gap-3">
                <FaFilePen className="2xl:text-6xl xl:text-4xl" />
                <p className="leading-4 2xl:text-[14px] xl:text-[10px] font-semibold">
                  Подать заявку
                </p>
              </div>
            </button>
            <button
              onClick={() => navigate("notification")}
              className="w-[65px] h-[42px] bg-[#005067] text-[#FFBA00] text-[30px]  rounded-md flex justify-center items-center "
            >
              <IoNotificationsSharp />

            </button>
          </div>
        </div>
        <div className=" h-[87vh] w-auto -black mt-[30px]  flex items-center justify-center gap-[10px]">
          <BusinessFilter />
          <div className="w-[80%]  h-full flex flex-col justify-between items-center">
            <div className="justify-start gap-3 w-full ">
              <h2 className="font-bold mb-1 2xl:text-[17px] xl:text-[14px]">
                В процессе
              </h2>
            </div>
            <div className="w-full h-[100%]">
              <BusinessTable
                title=""
                tableConfigs={tableConfigs}
                height={45}
                data={users}
                button={() => (
                  <div className="w-full flex gap-1 items-center  ">
                    <button
                      onClick={handleReoport}
                      className="bg-[#005EAF]  font-bold text-white rounded-md 2xl:text-[11px] xl:text-[7px] 2xl:p-[12px] xl:p-[7px]"
                    >
                      Заполнить отчет
                    </button>
                    <button
                      onClick={() => navigate("/cashflow/business-requests")}
                      className="bg-[#009BAF] font-bold  text-white rounded-md 2xl:text-[11px] xl:text-[7px] 2xl:p-[12px] xl:p-[7px] "
                    >
                      Посмотреть отчет
                    </button>
                  </div>
                )} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default BusinessTrip;
