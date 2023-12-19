import {
  Button,
  DatePicker,
  DatePickerProps,
  Input,
  Radio,
  RadioChangeEvent,
  Select,
} from "antd";
import TextArea from "antd/es/input/TextArea";
import { BiTransfer } from "react-icons/bi";
import { useState } from "react";
import { FaArrowRightArrowLeft } from "react-icons/fa6";
type ModalProps = {
  isMultipleModalOpen: string;
  setMultipleModalOpen: any;
};
const TransactionModal = (props: ModalProps) => {
  const { isMultipleModalOpen, setMultipleModalOpen } = props;
  const [value, setValue] = useState<number>(1);
  // data
  const onChange: DatePickerProps["onChange"] = (date, dateString) => {
    console.log(date, dateString);
  };
  // </data>
  //radio
  const onChanget = (e: RadioChangeEvent) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };
  // </radio>

  return (
    <>
      <div className="space-y-4">
        <div className="w-full flex justify-center font-bold text-[25px]">
          <h2>Добавить операцию</h2>
        </div>
        <div className="flex-col items-center  space-y-3 pl-5 overflow-x-auto h-[470px]">
          <div className="flex justify-start gap-10">
            <p className="w-[30%] ">Дата</p>{" "}
            <DatePicker
              style={{ width: 250, height: 45 }}
              onChange={onChange}
              placeholder="Выберите дата транцакции"
            />
          </div>
          <div className="flex justify-start gap-10">
            <p className="w-[30%]">Счеть * </p>{" "}
            <Select
              className=""
              showSearch
              style={{ width: 350, height: 45 }}
              placeholder="-Выберите счеть-"
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
          {isMultipleModalOpen === "Перевод" ? (
            <div className="flex justify-start gap-10">
              <p className="w-[30%]">Счеть для перевода* </p>{" "}
              <Select
                className=""
                showSearch
                style={{ width: 350, height: 45 }}
                placeholder="-Выберите счеть-"
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
          ) : null}
          <div className="w-full flex justify-end font-semibold">
            <Radio.Group onChange={onChanget} value={value}>
              <Radio
                value={1}
                onClick={() => setMultipleModalOpen("транцакции")}
              >
                <p className="text-[#06B134]">Приход</p>
              </Radio>
              <Radio
                value={2}
                onClick={() => setMultipleModalOpen("транцакции")}
              >
                <p className="text-[#DB0000]">Расход</p>
              </Radio>
              <Radio value={3} onClick={() => setMultipleModalOpen("Перевод")}>
                <p className="text-[#0035E3]">Перевод</p>
              </Radio>
            </Radio.Group>
          </div>
          {isMultipleModalOpen === "транцакции" ? (
            <>
              <div className="flex justify-start gap-10">
                <p className="w-[30%]">Статья прихода *</p>{" "}
                <Select
                  className=""
                  showSearch
                  style={{ width: 250, height: 45 }}
                  placeholder="-Выберите статья прихода-"
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
                <p className="w-[30%]">Тип категория 1</p>{" "}
                <Select
                  className=""
                  showSearch
                  style={{ width: 250, height: 45 }}
                  placeholder="-Выберите тип категории 1-"
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
              </div>{" "}
              <div className="flex justify-start gap-10">
                <p className="w-[30%]">Тип категория 2</p>{" "}
                <Select
                  className=""
                  showSearch
                  style={{ width: 250, height: 45 }}
                  placeholder="-Выберите тип категории 2-"
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
                <p className="w-[30%]">Тип категория 3</p>{" "}
                <Select
                  className=""
                  showSearch
                  style={{ width: 250, height: 45 }}
                  placeholder="-Выберите тип категории 3-"
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
                <p className="w-[30%]">Тип категория 4</p>{" "}
                <Select
                  className=""
                  showSearch
                  style={{ width: 250, height: 45 }}
                  placeholder="-Выберите тип категории 4-"
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
              <div className="flex items-center justify-start gap-10">
                <p className="w-[30%] ">Сумма * </p>{" "}
                <Input
                  placeholder="Введите суммы"
                  style={{ width: 350, height: 45 }}
                />
              </div>
              <div className="flex justify-start gap-10">
                <p className="w-[30%] ">Примечание к платежу</p>{" "}
                <TextArea style={{ width: 350 }} rows={3} />
              </div>
            </>
          ) : (
            <div className="mt-2 space-y-3">
              <div className="flex items-center justify-between">
                <p className="w-[30%] ">Курс валюты* </p>{" "}
                <Input
                  placeholder="Введите суммы"
                  style={{ width: 250, height: 45 }}
                />
              </div>
              <div className="flex  justify-start gap-10">
                <p className="w-[30%] ">Сумма * </p>{" "}
                <div className="flex-col ">
                  <div className="flex gap-2 items-center">
                    <p>USD</p>
                    <Input
                      placeholder="Введите суммы"
                      style={{ width: 350, height: 45 }}
                    />
                  </div>
                  <div className="w-full flex justify-center items-cente">
                    <BiTransfer className="text-[#EF9300] text-[35px] font-bold" />
                  </div>
                  <div className="flex gap-2 items-center">
                    <p>UZS</p>
                    <Input
                      placeholder="Введите суммы"
                      style={{ width: 350, height: 45 }}
                    />
                  </div>
                </div>
              </div>
              <div className="flex justify-start gap-10">
                <p className="w-[30%] ">Примечание к платежу</p>{" "}
                <TextArea style={{ width: 350 }} rows={3} />
              </div>
            </div>
          )}
        </div>
        <div className="w-full flex  items-center justify-center">
          <Button
            type="primary"
            className="w-[250px] bg-[#1677ff] text-white mt-5 flex items-center justify-center gap-3 p-4 "
          >
            <FaArrowRightArrowLeft />
            Добавить
          </Button>
        </div>
      </div>
    </>
  );
};

export default TransactionModal;
