import type {
  DatePickerProps,
  RadioChangeEvent,
  UploadFile,
  UploadProps,
} from "antd";
import { DatePicker, Modal, Radio, Select, Space, Upload } from "antd";
import ImgCrop from "antd-img-crop";
import Input from "antd/es/input/Input";
import TextArea from "antd/es/input/TextArea";
import { useState } from "react";

// data
const onChange: DatePickerProps["onChange"] = (date, dateString) => {
  console.log(date, dateString);
};
// </data>

// </>
const ReportFill = () => {
  // image update
  const [previewOpen, setPreviewOpen] = useState<boolean>(false);
  const [previewTitle, setPreviewTitle] = useState<string>("");
  const [previewImage, setPreviewImage] = useState<string>("");
  const [fileList, setFileList] = useState<UploadFile[]>([]);

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

  const onChanged: UploadProps["onChange"] = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };

  //</imagae update>
  // radio
  const [value, setValue] = useState(1);

  const onChanget = (e: RadioChangeEvent) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };
  return (
    <div className="flex items-center gap-5">
      <div className="w-full  space-y-4">
        <div className="flex space-x-4 w-[92%] ">
          <div className="flex-col space-y-2 w-[25%] ">
            <p> Дата</p>{" "}
            <DatePicker
              style={{ width: "100%", height: 45 }}
              onChange={onChange}
            />
          </div>
          <div className="flex-col space-y-2 w-[25%]">
            <p>Контрагент</p>{" "}
            <Select
              className=""
              showSearch
              style={{ width: "100%", height: 45 }}
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
          <div className="flex-col space-y-2 w-[25%]">
            <p>Сектор</p>{" "}
            <Select
              className=""
              showSearch
              style={{ width: "100%", height: 45 }}
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
          <div className="flex-col space-y-2 w-[40%]">
            <p>описание</p>{" "}
            <TextArea
              rows={1}
              style={{ maxWidth: "100%", minWidth: "60%", height: 45 }}
            />
          </div>
        </div>
        <div className="flex space-x-4 w-[95%]">
          <div className="flex-col space-y-2 w-[20%]">
            <p> Сумма подотчета</p>{" "}
            <Select
              className=""
              showSearch
              style={{ width: "100%", height: 45 }}
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
          <div className="flex-col space-y-2 w-[22%]">
            <p>Сумма</p>{" "}
            <Input
              style={{ width: "100%", height: 45 }}
              placeholder="Basic usage"
            />
          </div>
          <div className="flex-col space-y-2 w-[22%]">
            <p>Тип категория</p>{" "}
            <Select
              className=""
              showSearch
              style={{ width: "100%", height: 45 }}
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
          <div className="flex-col space-y-2 mt-6">
            <Radio.Group onChange={onChanget} value={value}>
              <Space direction="vertical">
                <Radio value={1}>Внутры региона</Radio>
                <Radio value={2}>Межрегионально</Radio>
              </Space>
            </Radio.Group>
          </div>
          <div className="flex-col space-y-2 w-[15%] ">
            <p>от</p>{" "}
            <Select
              className=""
              showSearch
              style={{ width: "100%", height: 45 }}
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
          <div className="flex-col space-y-2 w-[15%]">
            <p>до</p>{" "}
            <Select
              className=""
              showSearch
              style={{ maxWidth: "90%", minWidth: "40%", height: 45 }}
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
        </div>
        <div className="w-full ">
          <p className="mb-1 ">Прикрепите чек</p>
          <div>
            <ImgCrop rotationSlider>
              <Upload
                action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
                listType="picture-card"
                fileList={fileList}
                onChange={onChanged}
                onPreview={handlePreview}
              >
                {fileList.length < 6 && "+ Upload"}
              </Upload>
            </ImgCrop>
          </div>
          <Modal
            open={previewOpen}
            title={previewTitle}
            footer={null}
            onCancel={handleCancel}
          >
            <img alt="example" style={{ width: "100%" }} src={previewImage} />
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default ReportFill;
