import { DatePicker, Modal, DatePickerProps, Select, Space, Radio, Switch, } from "antd";
import TextArea from "antd/es/input/TextArea";
import type { RadioChangeEvent } from 'antd';
import { useState } from "react";
import { TbMessage2Share } from "react-icons/tb";
type ModalProps = {
    handleApply: any;
};
const BusinessApply = (props: ModalProps) => {
    const handleClose = () => {
        props.handleApply();
    };
    const onChange: DatePickerProps["onChange"] = (date, dateString) => {
        console.log(date, dateString);
    };
    const { RangePicker } = DatePicker;
    const [value, setValue] = useState(1);

    const onChanged = (e: RadioChangeEvent) => {
        console.log('radio checked', e.target.value);
        setValue(e.target.value);
    };
    return (
        <>
            <Modal
                width={790}
                className="mt-[-60px]"
                open={true}
                onCancel={handleClose}
                closeIcon={false}
                footer={null}
            >
                <div className="w-full space-y-4">
                    <div className="w-full flex justify-center font-bold ">
                        <h2 className="2xl:text-[30px] xl:text-[20px]">Подать заявку на командировку</h2>
                    </div>
                    <div className="flex">
                        <div className="flex">
                            <div className="p-1">
                                <p className="2xl:mb-[60px] xl:mb-[40px] font-semibold 2xl:mt-[45px] xl:mt-[27px]">Дата * </p>
                                <p className="2xl:mb-[60px] xl:mb-[50px] font-semibold ">Сектор</p>
                                <p className="2xl:mb-[60px] xl:mb-[40px] font-semibold ">Сотрудник</p>
                                <p className="2xl:mb-[40px] xl:mb-[25px] font-semibold ">Цель поездка</p>
                                <p className="2xl:mb-[120px] xl:mb-[105px] font-semibold ">Период поездка</p>
                                <p className="2xl:mb-[20px] xl:mb-[15px] font-semibold ">Гостиница</p>
                                <p className="font-semibold ">Описание</p>
                            </div>
                        </div>
                        <div className="">
                            <div className="2xl:mt-[30px] xl:mt-[15px] ">
                                <DatePicker
                                    style={{ width: "295px" }}
                                    className="modal-input"
                                    placeholder="21.04.2022 "
                                    onChange={onChange}
                                />
                            </div>
                            <div className="2xl:mt-[25px] xl:mt-[5px]">

                                <Select
                                    className="modal-input"
                                    showSearch
                                    style={{ width: 450, height: 45 }}
                                    placeholder="Выберите сектор"
                                    optionFilterProp="children"
                                    filterOption={(input, option) =>
                                        (option?.label ?? "").includes(input)
                                    }
                                    filterSort={(optionA, optionB) =>
                                        (optionA?.label ?? "")
                                            .toLowerCase()
                                            .localeCompare((optionB?.label ?? "").toLowerCase())
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
                            <div className="2xl:mt-[20px] xl:mt-[5px]">
                                <Select
                                    className="modal-input"
                                    showSearch
                                    style={{ width: 450, height: 45 }}
                                    placeholder="Выберите Сотрудник"
                                    optionFilterProp="children"
                                    filterOption={(input, option) =>
                                        (option?.label ?? "").includes(input)
                                    }
                                    filterSort={(optionA, optionB) =>
                                        (optionA?.label ?? "")
                                            .toLowerCase()
                                            .localeCompare((optionB?.label ?? "").toLowerCase())
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
                            <div className="2xl:mt-[20px] xl:mt-[5px]">
                                <Select
                                    className="modal-input"
                                    showSearch
                                    style={{ width: 450, height: 45 }}
                                    placeholder="Выберите Цель поездка"
                                    optionFilterProp="children"
                                    filterOption={(input, option) =>
                                        (option?.label ?? "").includes(input)
                                    }
                                    filterSort={(optionA, optionB) =>
                                        (optionA?.label ?? "")
                                            .toLowerCase()
                                            .localeCompare((optionB?.label ?? "").toLowerCase())
                                    }
                                    options={[
                                        {
                                            value: "1",
                                            label: "Самарканд",
                                        },
                                        {
                                            value: "2",
                                            label: "Джиззах",
                                        },
                                        {
                                            value: "3",
                                            label: "Туркия",
                                        },
                                        {
                                            value: "4",
                                            label: "Россия",
                                        },
                                    ]}
                                />
                            </div>
                            <div className="2xl:mt-[10px] xl:mt-[-5px]">
                                <Space className="modal-input" direction="vertical">
                                    <RangePicker />
                                </Space>
                            </div>
                            <div className="2xl:mt-[-20px] xl:mt-[-25px]">
                                <Radio.Group className="modal-input" onChange={onChanged} value={value}>
                                    <Radio value={1}>За гран</Radio>
                                    <Radio value={2}>Регион</Radio>
                                </Radio.Group>
                            </div>

                            <div className="2xl:mt-[-25px] xl:mt-[-30px]">
                                <Select
                                    className="modal-input"
                                    showSearch
                                    style={{ width: 450, height: 45 }}
                                    placeholder="Выберите Регион"
                                    optionFilterProp="children"
                                    filterOption={(input, option) =>
                                        (option?.label ?? "").includes(input)
                                    }
                                    filterSort={(optionA, optionB) =>
                                        (optionA?.label ?? "")
                                            .toLowerCase()
                                            .localeCompare((optionB?.label ?? "").toLowerCase())
                                    }
                                    options={[
                                        {
                                            value: "1",
                                            label: "Uzbekistan",
                                        },
                                        {
                                            value: "2",
                                            label: "USA",
                                        },
                                        {
                                            value: "3",
                                            label: "Russia",
                                        },
                                    ]}
                                />
                            </div>
                            <div className="2xl:mt-[0px] xl:mt-[-10px]">
                                <Switch className="ml-[150px]" size="small" defaultChecked />
                            </div>
                            <div className="">
                                <TextArea style={{ width: '450px', height: '50px' }} className="modal-input mt-[25px]" rows={4} />
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <button className="w-[300px] h-[55px] bg-[#0089FF] align-baseline flex m-auto rounded-[9px] items-center justify-center">
                            <TbMessage2Share className="text-[21px] text-[#ffffff] mr-[10px]" />
                            <p className="text-[#ffffff] text-[15px] font-[500] ">Отправить</p>
                        </button>
                    </div>
                </div>
            </Modal >
        </>
    )
}

export default BusinessApply;