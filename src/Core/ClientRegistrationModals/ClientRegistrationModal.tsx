import {
  Button,
  DatePicker,
  DatePickerProps,
  Input,
  Modal,
  Upload,
  UploadProps,
  message,
} from "antd";
import Title from "antd/es/typography/Title";
import { useState } from "react";
import { FaAddressCard } from "react-icons/fa6";
import "../ClientRegistrationModals/ClientRegistrationModal.css";
import Img from "./img";

const HeaderAdminBtn = () => {
  const props: UploadProps = {
    name: "file",
    action: "https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188",
    headers: {
      authorization: "authorization-text",
    },
    onChange(info) {
      if (info.file.status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === "done") {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onChange: DatePickerProps["onChange"] = (date, dateString) => {
    console.log(date, dateString);
  };
  return (
    <div>
      <div className=" flex justify-end gap-3 w-full p-3">
        <button
          onClick={showModal}
          className="btn-modal flex items-center p-2 gap-2 bg-[#0033A7] w-[123px] h-[40px] text-white text-[9px] rounded-[5px]"
        >
          <FaAddressCard className="text-white text-3xl" />
          <p className="mx-4">
            Добавит <br /> клиент
          </p>
        </button>
        <div className="w-fulf  h-full">
          <Modal
            className="w-[400px] "
            open={isModalOpen}
            footer={null}
            onOk={handleOk}
            onCancel={handleCancel}
            width={1065}
          >
            <Title className="flex justify-center" level={3}>
              {" "}
              Добавит клиент
            </Title>
            <p
              style={{
                marginLeft: "600px",
                fontSize: "20px",
                fontWeight: "600",
              }}
            >
              Клиентская информация
            </p>
            <div className="content-wrapper flex p-4">
              <div className="left">
                <Img />
                <Upload {...props}>
                  <Button className="btn-photo">
                    Загрузить фото <br /> заведение
                  </Button>
                </Upload>
              </div>
              <div className="right flex">
                <div className="p-1">
                  <p style={{ marginTop: "10px" }} className="modal-names">
                    Ф.И.О
                  </p>
                  <p className="modal-names ">Заведение</p>
                  <p className="modal-names ">Год рождения</p>
                  <p className="modal-names ">Серия и номер паспорта</p>
                  <p className="modal-names ">Дата выпуска паспорта</p>
                  <p className="modal-names ">Кем дано</p>
                  <p className="modal-names ">Адрес прописки</p>
                  <p className="modal-names ">Контакт</p>
                </div>
                <div className="">
                  <Input
                    className="modal-input"
                    placeholder="Введите имя менеджера"
                  />
                  <Input
                    className="modal-input"
                    placeholder="Введите имя заведение"
                  />
                  <DatePicker
                    style={{ width: "220px" }}
                    className="modal-input"
                    placeholder="Введите год рождения "
                    onChange={onChange}
                  />
                  <div className="flex">
                    <Input
                      style={{ width: "48px", height: "48px" }}
                      className="modal-input"
                      placeholder="AA"
                    />
                    <Input
                      style={{ marginLeft: "5px", width: "297px" }}
                      className="modal-input"
                      placeholder="Введите номер паспорта"
                    />
                  </div>
                  <DatePicker
                    style={{ width: "220px" }}
                    className="modal-input"
                    placeholder="Дата выпуска паспорта "
                    onChange={onChange}
                  />
                  <Input
                    className="modal-input"
                    placeholder="Паспорт кем дано"
                  />
                  <Input
                    className="modal-input"
                    placeholder="Введите адрес прописки"
                  />
                  <Input
                    className="modal-input"
                    placeholder="Введите контакт сотрудника"
                  />
                </div>
              </div>
            </div>
            <button className="add-clients ">
              <p style={{ fontWeight: "600" }}>Добавить клиент</p>
            </button>
          </Modal>
        </div>
      </div>
    </div>
  );
};
export default HeaderAdminBtn;
