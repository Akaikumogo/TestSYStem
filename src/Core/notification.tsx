
import { useState } from "react";
import Table from "./Table"
import { FiArrowLeft } from "react-icons/fi";
const Notification = () => {
    const [tableConfigs, setTableConfigs] = useState([
        { name: "№", size: "5%" },
        { name: "Сотрудник", size: "13%" },
        { name: "Заведение", size: "13%" },
        { name: "Заявил", size: "12%" },
        { name: "Дано", size: "12%" },
        { name: "Потратил", size: "15%" },
        { name: "Дедлайн", size: "13%" },
    ]);
    const [users, setUsers] = useState<any[]>([
        {
            id: 1,
            name: "Исроилов Жамшид Авазович",
            Institution: "Заправка Жондор",
            Declared: "31.08.2024",
            Given: "5 000 000 сум",
            Spent: "3 800 000 сум",
            Deadline: "10 дн",
        }
    ]);
    return (
        <div className="w-[100%]]  h-[100%] px-[10px] ">
            <div className="w-full flex justify-start items-center py-[45px] px-[0px]">
                <h1 className="text-[30px] font-bold text-[#102769]">Касса</h1>
                <div className="w-full">
                    <h2 className="text-[30px] font-bold text-[#000000] mx-[680px] ">Уведомление</h2>
                </div>
            </div>
            {/* <button className="w-[100px] h-[35px] my-[10px]  rounded-[9px]  bg-[#E6E6E6]  ">
                    <div className="flex  align-baseline mx-[15px]">
                        <FiArrowLeft />
                        <p style={{fontWeight: '600', fontSize: '14px'}}>Назад</p> 
                    </div>
                </button> */}
            <div className="  w-[94vw] flex-col gap-[10px] max-h-[700px]  overflow-x-auto" style={{ backgroundColor: '#DEEFFF', fontSize: '14px', fontWeight: '600', borderRadius: '9px' }}>
                <Table
                    users={users}
                    tableConfigs={tableConfigs}
                    menuItems={undefined}
                    menuType={""}
                />
                
            </div>
        </div>
    )
}

export default Notification
