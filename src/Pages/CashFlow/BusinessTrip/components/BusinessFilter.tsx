import { useState } from "react";
const BusinessFilter = () => {
    const [isActive, setIsActive] = useState(false);
    const handleClick = () => {
      setIsActive(!isActive);
    };
    return(
        <div className="2xl:w-[19%] xl:w-[22%]  h-[100%]">
            <div className="bg-[#DFE8F2] shadow-inner w-[100%] h-[85vh] rounded-xl">
              <div className="flex justify-start gap-3 w-full p-3">
                <h2 className="2xl:text-[17px] xl:text-[14px] font-bold">
                  Региональный фильтрация
                </h2>
              </div>
              <div className="">
                <button className="2xl:w-[125px] xl:w-[100px] 2xl:mx-[15px] xl:mx-[10px] h-[25px]  bg-[#ffffff] rounded-[5px]">
                  <p
                    onClick={handleClick}
                    style={{
                      color: isActive ? "white" : "black",
                      backgroundColor: isActive ? "#0063B9" : "white",
                      borderRadius: "5px",
                    }}
                    className="2xl:text-[14px] xl:text-[13px] text-black  font-bold "
                  >
                    Ташкент
                  </p>
                </button>

                <button className="2xl:w-[125px] xl:w-[100px] 2xl:mx-[15px] xl:mx-[10px] h-[25px]  bg-[#ffffff] rounded-[5px]">
                  <p className="2xl:text-[14px] xl:text-[13px] text-black  font-bold ">
                    Самарканд
                  </p>
                </button>

                <button className="2xl:w-[125px] xl:w-[100px] 2xl:mx-[15px] xl:mx-[10px] h-[25px]  bg-[#ffffff] rounded-[5px] mt-[10px]">
                  <p className="2xl:text-[14px] xl:text-[13px] text-black  font-bold ">Бухара</p>
                </button>

                <button className="2xl:w-[125px] xl:w-[100px] 2xl:mx-[15px] xl:mx-[10px] h-[25px]  bg-[#ffffff] rounded-[5px] mt-[10px]">
                  <p className="2xl:text-[14px] xl:text-[13px] text-black  font-bold ">Джиззах</p>
                </button>

                <button className="2xl:w-[125px] xl:w-[100px] 2xl:mx-[15px] xl:mx-[10px] h-[25px]  bg-[#ffffff] rounded-[5px] mt-[10px]">
                  <p className="2xl:text-[14px] xl:text-[13px] text-black  font-bold ">
                    Казахстан
                  </p>
                </button>

                <button className="2xl:w-[125px] xl:w-[100px] 2xl:mx-[15px] xl:mx-[10px] h-[25px]  bg-[#ffffff] rounded-[5px] mt-[10px]">
                  <p className="2xl:text-[14px] xl:text-[13px] text-black  font-bold ">Туркия</p>
                </button>

                <button className="2xl:w-[125px] xl:w-[100px] 2xl:mx-[15px] xl:mx-[10px] h-[25px]  bg-[#ffffff] rounded-[5px] mt-[10px]">
                  <p className="2xl:text-[14px] xl:text-[13px] text-black  font-bold ">США</p>
                </button>

                <button className="2xl:w-[125px] xl:w-[100px] 2xl:mx-[15px] xl:mx-[10px] h-[25px]  bg-[#ffffff] rounded-[5px] mt-[10px]">
                  <p className="2xl:text-[14px] xl:text-[13px] text-black  font-bold ">Россия</p>
                </button>
              </div>
              <div className="flex justify-start gap-3 w-full p-3 mt-[35px]">
                <h2 className="2xl:text-[17px] xl:text-[15px] font-bold">Филтрация по секторам</h2>
              </div>
              <div className="">
                <button className="2xl:w-[125px] xl:w-[100px] 2xl:mx-[15px] xl:mx-[10px] h-[25px]  bg-[#ffffff] rounded-[5px]">
                  <p className="2xl:text-[14px] xl:text-[13px] text-black  font-bold ">
                    Акфа Пласт
                  </p>
                </button>
                <button className="2xl:w-[125px] xl:w-[100px] 2xl:mx-[15px] xl:mx-[10px] h-[25px]  bg-[#ffffff] rounded-[5px]">
                  <p className="2xl:text-[14px] xl:text-[13px] text-black  font-bold ">
                    Акфа Алюмин
                  </p>
                </button>
              </div>
            </div>
          </div>
    )
}
export default BusinessFilter;