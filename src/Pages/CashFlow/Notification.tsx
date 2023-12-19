import { useNavigate } from "react-router-dom";
import Table from "../../Core/Tables/Table";
import { FaArrowLeft } from "react-icons/fa6";
import { AiOutlineClose } from "react-icons/ai";
const tableConfigs = [
  { name: "№", size: "5%" },
  { name: "Сотрудник", size: "25%" },
  { name: "Заведение", size: "15%" },
  { name: "Заявил", size: "15%" },
  { name: "Дано", size: "15%" },
  { name: "Потратил", size: "10%" },
  { name: "Дедлайн", size: "15%" },
  { name: "", size: "10%" },
];
const users = [
  {
    id: 1,
    name: {
      name: "Исроилов Жамшид Авазович",
      type: "UserName",
    },
    institution: "Заправка Жондор",
    declared: "31.08.2024",
    given: "25 000 000 сум",
    ishlatdi: "3 800 000 сум",
    deadline: "10 дн",
  },
  {
    id: 1,
    name: {
      name: "Исроилов Жамшид Авазович",
      type: "UserName",
    },
    institution: "Заправка Жондор",
    declared: "31.08.2024",
    given: "25 000 000 сум",
    ishlatdi: "3 800 000 сум",
    deadline: "10 дн",
  },
  {
    id: 1,
    name: {
      name: "Исроилов Жамшид Авазович",
      type: "UserName",
    },
    institution: "Заправка Жондор",
    declared: "31.08.2024",
    given: "25 000 000 сум",
    ishlatdi: "3 800 000 сум",
    deadline: "10 дн",
  },
  {
    id: 1,
    name: {
      name: "Исроилов Жамшид Авазович",
      type: "UserName",
    },
    institution: "Заправка Жондор",
    declared: "31.08.2024",
    given: "25 000 000 сум",
    ishlatdi: "3 800 000 сум",
    deadline: "10 дн",
  },
  {
    id: 1,
    name: {
      name: "Исроилов Жамшид Авазович",
      type: "UserName",
    },
    institution: "Заправка Жондор",
    declared: "31.08.2024",
    given: "25 000 000 сум",
    ishlatdi: "3 800 000 сум",
    deadline: "10 дн",
  },
  {
    id: 1,
    name: {
      name: "Исроилов Жамшид Авазович",
      type: "UserName",
    },
    institution: "Заправка Жондор",
    declared: "31.08.2024",
    given: "25 000 000 сум",
    ishlatdi: "3 800 000 сум",
    deadline: "10 дн",
  },
  {
    id: 1,
    name: {
      name: "Исроилов Жамшид Авазович",
      type: "UserName",
    },
    institution: "Заправка Жондор",
    declared: "31.08.2024",
    given: "25 000 000 сум",
    ishlatdi: "3 800 000 сум",
    deadline: "10 дн",
  },
  {
    id: 1,
    name: {
      name: "Исроилов Жамшид Авазович",
      type: "UserName",
    },
    institution: "Заправка Жондор",
    declared: "31.08.2024",
    given: "25 000 000 сум",
    ishlatdi: "3 800 000 сум",
    deadline: "10 дн",
  },
  {
    id: 1,
    name: {
      name: "Исроилов Жамшид Авазович",
      type: "UserName",
    },
    institution: "Заправка Жондор",
    declared: "31.08.2024",
    given: "25 000 000 сум",
    ishlatdi: "3 800 000 сум",
    deadline: "10 дн",
  },
  {
    id: 1,
    name: {
      name: "Исроилов Жамшид Авазович",
      type: "UserName",
    },
    institution: "Заправка Жондор",
    declared: "31.08.2024",
    given: "25 000 000 сум",
    ishlatdi: "3 800 000 сум",
    deadline: "10 дн",
  },
  {
    id: 1,
    name: {
      name: "Исроилов Жамшид Авазович",
      type: "UserName",
    },
    institution: "Заправка Жондор",
    declared: "31.08.2024",
    given: "25 000 000 сум",
    ishlatdi: "3 800 000 сум",
    deadline: "10 дн",
  },
  {
    id: 1,
    name: {
      name: "Исроилов Жамшид Авазович",
      type: "UserName",
    },
    institution: "Заправка Жондор",
    declared: "31.08.2024",
    given: "25 000 000 сум",
    ishlatdi: "3 800 000 сум",
    deadline: "10 дн",
  },
];
interface MyObject {
  description: {
    text: string;
  };
  id: number;
}

const Notification = () => {
  const navigate = useNavigate();
  return (
    <div className="w-[100%] p-5 xl:pl-[15px] overflow-x-auto  ">
      <div className="xl:w-[92vw] 2xl:w-[93vw]  flex flex-col    h-[96vh] my-auto">
        <div className="w-full xl:h-[50px] 2xl:h-[70px]  mb-[5px] flex items-center ">
          {" "}
          <button
            className="flex items-center gap-2 bg-[#E6E6E6] px-3 py-1.5 shadow-md shadow-[#86868667] rounded-lg mr-5"
            onClick={() => navigate("/cashflow/business-trip")}
          >
            <FaArrowLeft /> <p>Назад</p>
          </button>
          <h1
            className="mx-auto font-bold 
          pr-[160px] text-[28px]"
          >
            Уведомление
          </h1>
        </div>
        <Table
          title=""
          tableConfigs={tableConfigs}
          data={users}
          height={70}
          button={(data: MyObject) => (
            <div className="w-full flex gap-1 items-center  ">
              <button
                onClick={() => data}
                className="bg-[#0074A7]  font-bold text-white rounded-md 2xl:text-[11px] xl:text-[9px] 2xl:p-[12px] xl:p-[5px] xl:px-[8px]"
              >
                Посмотреть
              </button>
              <button className="bg-[#890000] font-bold  text-white rounded-md 2xl:text-[16px] xl:text-[16px] 2xl:p-[12px] xl:p-[5px] xl:px-[8px]">
                <AiOutlineClose className="font-extrabold  text-white 2xl:text-[16px] xl:text-[16px]" />
              </button>
            </div>
          )}
        />
      </div>
    </div>
  );
};

export default Notification;
