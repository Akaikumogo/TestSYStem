import { Tabs } from "antd";
import BusinessRequests from "../page/BusinessRequests";
import Management from "../../Management/Management";
import { FaArrowLeft } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const { TabPane } = Tabs;

const panes = [
  {
    key: "1",
    label: "Общая",
    content: <BusinessRequests />,
  },
  {
    key: "2",
    label: "Подтвержденные",
    content: <Management />,
  },
  {
    key: "3",
    label: "В ожидании",
    content: "Content of Tab Pane 3",
  },
  {
    key: "4",
    label: "Отказ",
    content: "Content of Tab Pane 4",
  },
];

const BusinessTabs = () => {
  const navigate = useNavigate();

  return (
    <div className="">
      <Tabs
        defaultActiveKey="1"
        onChange={(key: string) => console.log(key)}
        tabBarExtraContent={{
          right: (
            <div className="flex gap-5 items-center mb-5">
              <h1 className="font-bold text-[#102769] text-[30px]">
                Исроилов Жамшид Авазович
              </h1>
              <div className="w-[60px] rounded-full h-[60px] bg-black"></div>
            </div>
          ),
          left: (
            <button
              className="flex items-center gap-2 bg-[#E6E6E6] px-3 py-1.5 shadow-md shadow-[#86868667] rounded-lg mr-5"
              onClick={() => navigate("/cashflow/business-trip")}
            >
              <FaArrowLeft /> <p>Назад</p>
            </button>
          ),
        }}
      >
        {panes.map((pane) => (
          <TabPane tab={pane.label} key={pane.key}>
            {pane.content}
          </TabPane>
        ))}
      </Tabs>
    </div>
  );
};

export default BusinessTabs;
