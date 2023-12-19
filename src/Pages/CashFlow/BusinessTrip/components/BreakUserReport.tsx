import { Input, Select } from "antd";

const BreakUserReport = () => {
  return (
    <div className="flex gap-10 ">
      <div>
        <Select
          className=""
          showSearch
          style={{ width: 300, height: 45 }}
          placeholder="-Выберите сектор-"
          optionFilterProp="children"
          filterOption={(input, option) =>
            (option?.label?.toLowerCase() ?? "").includes(input.toLowerCase())
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
      <div>
        <Select
          className=""
          showSearch
          style={{ width: 300, height: 45 }}
          placeholder="-Выберите сектор-"
          optionFilterProp="children"
          filterOption={(input, option) =>
            (option?.label?.toLowerCase() ?? "").includes(input.toLowerCase())
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
      <div>
        <Input style={{ width: 300, height: 45 }} placeholder="Basic usage" />
      </div>
      <div>
        <Input
          style={{ width: 150, height: 45 }}
          className=""
          placeholder="Basic usage"
        />
      </div>
      <div>
        <Select
          className="ml-14"
          showSearch
          style={{ width: 300, height: 45 }}
          placeholder="-Выберите сектор-"
          optionFilterProp="children"
          filterOption={(input, option) =>
            (option?.label?.toLowerCase() ?? "").includes(input.toLowerCase())
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
  );
};

export default BreakUserReport;
