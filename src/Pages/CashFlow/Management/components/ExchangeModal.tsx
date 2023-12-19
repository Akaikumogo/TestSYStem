import { Button, DatePicker, Input, Space } from "antd";
import { ChangeEvent, useEffect, useState } from "react";
import { Modal } from "antd";
import { SizeType } from "antd/es/config-provider/SizeContext";
import userIndex from "../../../../API/Cashflow/Managements/userIndex";
import { format } from "date-fns";

type Exchange = {
  showModal: any;
};

const ExchangeModal = (props: Exchange) => {
  const handleClose = () => {
    props.showModal();
  };

  const { getExchangeList, createSwap, exchangeData } = userIndex();
  const currentTimeDate = new Date();
  const currentDate = currentTimeDate.getDate();
  const currentMonth = currentTimeDate.getMonth();
  const CurrentYear = currentTimeDate.getFullYear();
  const fullDate = `${currentDate}.${currentMonth + 1}.${CurrentYear}`;

  const [size, setSize] = useState<SizeType>("middle");
  const [buyRate, setBuyRate] = useState<number | string>("");
  const [saleRate, setSaleRate] = useState<number | string>("");
  const [exchange, setExchange] = useState<any[]>([]);
  const { RangePicker } = DatePicker;

  const editFunc = (e: ChangeEvent<HTMLInputElement>) => {
    setBuyRate(Number(e.target.value.replace(/\D/g, "")));
  };

  const isMobile = window.innerWidth <= 1280;

  const handleButtonClick = async () => {
    try {
      const formattedBuyRate = buyRate === "" ? 0 : Number(buyRate);
      const formattedSaleRate = saleRate === "" ? 0 : Number(saleRate);

      const response = await createSwap({
        currency: 10,
        buyRate: formattedBuyRate,
        saleRate: formattedSaleRate,
      });

      console.log("Server response:", response.data);

      handleClose();
    } catch (error) {
      console.error("Error changing exchange rate:", error);
    }
  };

  const fetchExchange = async () => {
    try {
      const response = await getExchangeList();
      setBuyRate(response.data.buyRate ?? "");
      setSaleRate(response.data.saleRate ?? "");
      setExchange(response.data || []);
    } catch (error) {
      console.error("Error fetching exchange rates:", error);
    }
  };

  const fetchUserTopData = async (start: string, end: string) => {
    try {
      const response = await exchangeData(start, end);
      setExchange(response.data || []);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching user top data:", error);
    }
  };

  const handleDateRangeChange = async (dates: any) => {
    try {
      if (dates && dates.length === 2) {
        const startDate = dates[0].format("DD.MM.YYYY");
        const endDate = dates[1].format("DD.MM.YYYY");
        const response = await exchangeData(startDate, endDate);

        if (!response.data || response.data.length === 0) {
          console.log("Ma'lumotlar mavjud emas");
          setExchange([]);
        } else {
          setExchange(response.data);
          console.log(response.data);
        }
      }
    } catch (error) {
      console.error("Xato sodir bo'ldi:", error);
      setExchange([]);
    }
  };
  useEffect(() => {
    fetchExchange();
  }, []);

  const formatCreatedAt = (createdAt: string) => {
    const date = new Date(createdAt);
    const formattedDate = `${date.getFullYear()}-${(date.getMonth() + 1)
      .toString()
      .padStart(2, "0")}-${date.getDate().toString().padStart(2, "0")} ${date
      .getHours()
      .toString()
      .padStart(2, "0")}:${date.getMinutes().toString().padStart(2, "0")}:${date
      .getSeconds()
      .toString()
      .padStart(2, "0")}`;
    return formattedDate;
  };

  return (
    <>
      <Modal
        open={true}
        onCancel={handleClose}
        footer={null}
        className="text-center"
        closeIcon={false}
        mask={false}
        width={isMobile ? 480 : 600}
        style={{ position: "absolute", top: "12%", right: "1%" }}
      >
        <div>
          <div className="flex items-center font-semibold justify-between">
            <h2 className="2xl:text-[22pt] xl:text-[20pt]">{fullDate}</h2>
            <p className="text-[20px]">Изменить курс доллара</p>
          </div>
          <div className="flex items-center justify-between 2xl:mt-4 xl:mt-3 2xl:mb-4 xl:mb-3">
            <Input
              placeholder="Введите курс банка"
              className="w-[48%] h-[50px] border-3"
              value={buyRate.toString()}
              onChange={(e) => editFunc(e)}
            />
            <Input
              placeholder="Введите курс обмена"
              className="w-[48%] h-[50px] border-3"
              value={saleRate.toString()}
              onChange={(e) =>
                setSaleRate(Number(e.target.value.replace(/\D/g, "")))
              }
            />
          </div>
          <div className="w-full mb-5">
            <Button
              type="primary"
              className="bg-[#009BAF] text-white w-[100%] 2xl:h-[50px] xl:h-[42px] rounded-md font-semibold flex items-center justify-center "
              id="btn"
              onClick={handleButtonClick}
            >
              Изменить курс
            </Button>
          </div>
          <hr className="w-[90%] ml-5 border-2 text-center flex justify-center " />
          <div className="flex-col mt-5">
            <div className="flex justify-between items-center">
              <p className="2xl:text-[20px] xl:text-[14px] font-semibold">
                История курса доллара
              </p>
              <Space direction="vertical" size={12}>
                <RangePicker onChange={handleDateRangeChange} />
              </Space>
            </div>
            <div className="w-[100%] border shadow-inner bg-[#F5F7F8] mt-4">
              <div className="w-[100%] flex justify-start p-3">
                <div className="w-[33%]">Дата</div>
                <div className="w-[33%]">Банк</div>
                <div className="w-[33%]">Обмен</div>
              </div>
              <div className="w-[100%]  flex-col overflow-scroll border h-[100%] 2xl:max-h-[500px] xl:max-h-[320px]">
                <div className="pl-3 pr-3 overflow-scroll h-[500px]">
                  {exchange.length === 0 ? (
                    <div className="w-full h-[100%] flex justify-center items-center">
                      <p>Malumotlar bu sanda mavjud emas</p>
                    </div>
                  ) : (
                    exchange.map((item: any) => (
                      <div
                        key={item.id}
                        className="w-[100%] flex justify-start items-center bg-white 2xl:p-5 xl:p-4 rounded-lg table-tbody"
                      >
                        <div className="w-[33%]">
                          {formatCreatedAt(item.createdAt)}
                        </div>
                        <div className="w-[33%]">{item.buyRate}</div>
                        <div className="w-[33%]">{item.saleRate}</div>
                      </div>
                    ))
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ExchangeModal;
