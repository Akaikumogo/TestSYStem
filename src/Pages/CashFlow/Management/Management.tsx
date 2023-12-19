import { useEffect, useState } from "react";
import MenegementLeftPanel from "./components/MenegementLeftPanel";
import Tabs from "./components/Tabs";
import { FaFileInvoiceDollar } from "react-icons/fa";
import ExchangeModal from "./components/ExchangeModal";
import HeaderTabs from "../../../Core/HeaderTabs";
import { useParams } from "react-router-dom";
import { ManagamentDetails } from "./page/ManagamentDetails";
import userIndex from "../../../API/Cashflow/Managements/userIndex";

const Management = () => {
  const { getExchangeList } = userIndex();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [exchange, setExchange] = useState<any[]>([]);
  const id = useParams();
  const showModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  const fetchExchange = async () => {
    try {
      const response = await getExchangeList();
      setExchange(response.data || []);
    } catch (error) {
      console.error("Error fetching exchange rates:", error);
    }
  };
  useEffect(() => {
    fetchExchange();
  }, []);
  return (
    <div className=" h-[100%] xl:w-[92vw] 2xl:w-[93vw]  ">
      <div className="full flex justify-between   items-center ">
        <div className="flex items-center gap-5">
          <h1 className="text-[30px] font-bold text-[#102769]">Касса</h1>

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
        <div>
          {isModalOpen && <ExchangeModal showModal={showModal} />}
          <p className="text-[14px] mb-1">Курс доллара</p>

          <div
            className="w-[160px] h-[42px] bg-[#CFFF81] rounded-md flex items-center gap-3 p-3 shadow-md shadow-[gray] cursor-pointer text-[12px]"
            onClick={showModal}
          >
            {exchange?.length > 0 && (
              <div className="flex gap-3">
                <div>
                  <p>Банка</p>
                  <p className="text-[#3B7100] font-semibold">
                    {exchange[0].buyRate}
                  </p>
                </div>
                <div>
                  <p>Обмена</p>
                  <p className="text-[#3B7100] font-semibold">
                    {exchange[0].saleRate}
                  </p>
                </div>
              </div>
            )}

            <FaFileInvoiceDollar className="text-[23px] text-[#3B7100]" />
          </div>
        </div>
      </div>
      <div className="flex items-start justify-between w-full gap-3 mt-5">
        <div className="2xl:w-[20%] xl:w-[24%]">
          <MenegementLeftPanel />
        </div>
        <div className="w-[80%]">
          <h1 className="font-bold mb-1">Кассы</h1>
          {!id ? <ManagamentDetails /> : <Tabs />}
        </div>
      </div>
    </div>
  );
};

export default Management;
