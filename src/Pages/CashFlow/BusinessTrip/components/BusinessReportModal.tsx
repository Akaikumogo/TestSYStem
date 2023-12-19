import { Button, Input, Modal, Radio, Segmented } from "antd";
import "./BusineesModal.css";
import { useState } from "react";
import type {
  DatePickerProps,
  RadioChangeEvent,
  UploadFile,
  UploadProps,
} from "antd";
import { DatePicker } from "antd";
import { Select } from "antd";
import TextArea from "antd/es/input/TextArea";
import { Upload } from "antd";
import ImgCrop from "antd-img-crop";
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import BussinessSeveralModal from "./BussinessSeveralModal";
import SmashModal from "./SmashModal";

type ModalProps = {
  handleReoport: any;
};

const onChanges: DatePickerProps["onChange"] = (date, dateString) => {
  console.log(date, dateString);
};

const BusinessReportModal = (props: ModalProps) => {
  console.log(screen.height);
  const [value, setValue] = useState<number>(1);
  const [previewOpen, setPreviewOpen] = useState<boolean>(false);
  const [previewTitle, setPreviewTitle] = useState<string>("");
  const [previewImage, setPreviewImage] = useState<string>("");
  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const [isMultipleModalOpen, setMultipleModalOpen] = useState<any>("Одно");
  const [options, setOptions] = useState(["Одно", "Несколько"]);

  const onChanget = (e: RadioChangeEvent) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };

  const handleClose = () => {
    props.handleReoport();
  };

  const handlePreview = async (file: UploadFile<any>) => {
    if (!file.url && !file.preview) {
      if (file.originFileObj) {
        file.preview = (await getBase64(file.originFileObj)) as string;
      }
    }

    setPreviewTitle(
      ((file.name ||
        file.url?.substring(file.url?.lastIndexOf("/") + 1)) as string) ??
        "Untitled"
    );
    setPreviewImage(((file.url ?? file.preview) as string) ?? "");
    setPreviewOpen(true);
  };

  const handleCancel = () => setPreviewOpen(false);

  const getBase64 = (file: Blob) => {
    return new Promise<string>((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = (error) => reject(error);
    });
  };

  const onChange: UploadProps["onChange"] = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };
  const handleRazbitClick = () => {
    setMultipleModalOpen("Разбить");
    setOptions(["Одно", "Несколько", "Разбить"]);
  };
  return (
    <>
      <Modal
        open={true}
        onCancel={handleClose}
        footer={false}
        width={isMultipleModalOpen === "Одно" ? 615 : 1749}
        className="ant-modal-report"
        style={screen.height >= 1080 ? { top: "10vh" } : { top: "2vh" }}
      >
        <div className="w-full space-y-4">
          <div className="w-full flex justify-center font-bold text-[25px]">
            <h2>Заполнить отчет</h2>
          </div>
          <div className="w-full flex justify-center gap-4 ">
            {isMultipleModalOpen !== "Разбить" && (
              <Segmented
                options={options}
                value={isMultipleModalOpen}
                onChange={(value) => setMultipleModalOpen(value)}
              />
            )}
          </div>
          {isMultipleModalOpen === "Одно" ? (
            <div className="flex-col items-center  space-y-3 pl-5 overflow-x-auto h-[470px] ">
              <div className="flex justify-start gap-10">
                <p className="w-[30%] ">Дата</p>{" "}
                <DatePicker
                  style={{ width: 250, height: 45 }}
                  onChange={onChanges}
                />
              </div>
              <div className="flex justify-start gap-10">
                <p className="w-[30%]">Сектор</p>{" "}
                <Select
                  className=""
                  showSearch
                  style={{ width: 250, height: 45 }}
                  placeholder="-Выберите сектор-"
                  optionFilterProp="children"
                  filterOption={(input, option) =>
                    (option?.label?.toLowerCase() ?? "").includes(
                      input.toLowerCase()
                    )
                  }
                  filterSort={(optionA, optionB) =>
                    (optionA?.label?.toLowerCase() ?? "").localeCompare(
                      optionB?.label?.toLowerCase() ?? ""
                    )
                  }
                  options={[
                    {
                      value: "1",
                      label: "Not Identified",
                    },
                    {
                      value: "2",
                      label: "Closed",
                    },
                    {
                      value: "3",
                      label: "Communicated",
                    },
                    {
                      value: "4",
                      label: "Identified",
                    },
                  ]}
                />
              </div>
              <div className="flex justify-start gap-10">
                <p className="w-[30%]">Контрагент</p>{" "}
                <Select
                  className=""
                  showSearch
                  style={{ width: 250, height: 45 }}
                  placeholder="-Выберите контрагента-"
                  optionFilterProp="children"
                  filterOption={(input, option) =>
                    (option?.label?.toLowerCase() ?? "").includes(
                      input.toLowerCase()
                    )
                  }
                  filterSort={(optionA, optionB) =>
                    (optionA?.label?.toLowerCase() ?? "").localeCompare(
                      optionB?.label?.toLowerCase() ?? ""
                    )
                  }
                  options={[
                    {
                      value: "1",
                      label: "Not Identified",
                    },
                    {
                      value: "2",
                      label: "Closed",
                    },
                    {
                      value: "3",
                      label: "Communicated",
                    },
                    {
                      value: "4",
                      label: "Identified",
                    },
                  ]}
                />
              </div>
              <div className="flex justify-start gap-10">
                <p className="w-[30%]">Сумма подотчета *</p>
                <Select
                  showSearch
                  style={{ width: 350, height: 45 }}
                  placeholder="Долг 5 000 000"
                  optionFilterProp="children"
                  filterOption={(input, option) =>
                    (option?.label?.toLowerCase() ?? "").includes(
                      input.toLowerCase()
                    )
                  }
                  filterSort={(optionA, optionB) =>
                    (optionA?.label?.toLowerCase() ?? "").localeCompare(
                      optionB?.label?.toLowerCase() ?? ""
                    )
                  }
                  options={[
                    {
                      value: "1",
                      label: "Not Identified",
                    },
                    {
                      value: "2",
                      label: "Closed",
                    },
                    {
                      value: "3",
                      label: "Communicated",
                    },
                    {
                      value: "4",
                      label: "Identified",
                    },
                  ]}
                />
              </div>
              <div className="flex justify-start gap-10">
                <p className="w-[30%] ">Сумма</p>
                <Input
                  placeholder="Введите сумма расхода"
                  style={{ width: 350, height: 45 }}
                />
              </div>
              <div className="w-full flex justify-end">
                <button
                  className="font-semibold text-[#0089FF]"
                  onClick={handleRazbitClick}
                >
                  Разбить
                </button>
              </div>
              <div className="flex justify-start gap-10">
                <p className="w-[30%] ">Тип категория 1</p>{" "}
                <Select
                  showSearch
                  style={{ width: 250, height: 45 }}
                  placeholder="Дарожний расход"
                  optionFilterProp="children"
                  filterOption={(input, option) =>
                    (option?.label?.toLowerCase() ?? "").includes(
                      input.toLowerCase()
                    )
                  }
                  filterSort={(optionA, optionB) =>
                    (optionA?.label?.toLowerCase() ?? "").localeCompare(
                      optionB?.label?.toLowerCase() ?? ""
                    )
                  }
                  options={[
                    {
                      value: "1",
                      label: "Not Identified",
                    },
                    {
                      value: "2",
                      label: "Closed",
                    },
                    {
                      value: "3",
                      label: "Communicated",
                    },
                    {
                      value: "4",
                      label: "Identified",
                    },
                  ]}
                />
              </div>
              <div className="w-full flex justify-end">
                <Radio.Group onChange={onChanget} value={value}>
                  <Radio value={1}>Внутры региона</Radio>
                  <Radio value={2}>Межрегионально</Radio>
                </Radio.Group>
              </div>
              <div className="flex justify-end items-center gap-2">
                <p>от</p>{" "}
                <Select
                  showSearch
                  style={{ width: 150, height: 45 }}
                  placeholder="-Выберите тип-"
                  optionFilterProp="children"
                  filterOption={(input, option) =>
                    (option?.label?.toLowerCase() ?? "").includes(
                      input.toLowerCase()
                    )
                  }
                  filterSort={(optionA, optionB) =>
                    (optionA?.label?.toLowerCase() ?? "").localeCompare(
                      optionB?.label?.toLowerCase() ?? ""
                    )
                  }
                  options={[
                    {
                      value: "1",
                      label: "Not Identified",
                    },
                    {
                      value: "2",
                      label: "Closed",
                    },
                    {
                      value: "3",
                      label: "Communicated",
                    },
                    {
                      value: "4",
                      label: "Identified",
                    },
                  ]}
                />
                <p>до</p>{" "}
                <Select
                  showSearch
                  style={{ width: 150, height: 45 }}
                  placeholder="-Выберите тип-"
                  optionFilterProp="children"
                  filterOption={(input, option) =>
                    (option?.label?.toLowerCase() ?? "").includes(
                      input.toLowerCase()
                    )
                  }
                  filterSort={(optionA, optionB) =>
                    (optionA?.label?.toLowerCase() ?? "").localeCompare(
                      optionB?.label?.toLowerCase() ?? ""
                    )
                  }
                  options={[
                    {
                      value: "1",
                      label: "Not Identified",
                    },
                    {
                      value: "2",
                      label: "Closed",
                    },
                    {
                      value: "3",
                      label: "Communicated",
                    },
                    {
                      value: "4",
                      label: "Identified",
                    },
                  ]}
                />
              </div>
              <div className="flex justify-start gap-10">
                <p className="w-[30%] ">описание</p> <TextArea rows={1} />
              </div>
              <div className="w-full">
                <p className="w-[30%] ">Прикрепите чек</p> <br />
                <div>
                  <ImgCrop rotationSlider>
                    <Upload
                      action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
                      listType="picture-card"
                      fileList={fileList}
                      onChange={onChange}
                      onPreview={handlePreview}
                    >
                      {fileList.length < 5 && "+ Upload"}
                    </Upload>
                  </ImgCrop>
                </div>
                <Modal
                  open={previewOpen}
                  title={previewTitle}
                  footer={null}
                  onCancel={handleCancel}
                >
                  <img
                    alt="example"
                    style={{ width: "100%" }}
                    src={previewImage}
                  />
                </Modal>{" "}
              </div>
            </div>
          ) : isMultipleModalOpen === "Несколько" ? (
            <div>
              <BussinessSeveralModal />
            </div>
          ) : isMultipleModalOpen === "Разбить" ? (
            <div>
              <SmashModal />
            </div>
          ) : null}

          <div className="w-full flex  items-center justify-center">
            <div>
              {isMultipleModalOpen === "Разбить" ? (
                <div className="flex gap-3">
                  <button className="bg-[#00B158] text-white mt-5 flex items-center justify-center w-[250px] hover:bg-[#00B158] p-2 rounded-md">
                    Готово
                  </button>
                  <Button
                    onClick={handleClose}
                    type="default"
                    className=" mt-5 flex items-center justify-center w-[150px]  p-5 rounded-md"
                  >
                    otmen
                  </Button>
                </div>
              ) : (
                <Button
                  type="primary"
                  className="w-[250px] bg-[#1677ff] text-white mt-5 flex items-center justify-center gap-3 p-4 "
                >
                  <FaArrowRightArrowLeft />
                  Добавить
                </Button>
              )}
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default BusinessReportModal;
