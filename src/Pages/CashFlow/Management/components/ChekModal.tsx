import { useEffect, useState } from "react";
import { Modal, Input, Radio, Select, Space } from "antd";
import { IoWallet } from "react-icons/io5";
import userIndex from "../../../../API/Cashflow/Managements/userIndex";

interface ChekModalProps {
  showModal: (userId: number | null) => void;
  defaultUserId: number | any;
}

const provinceData = ["Валюта"];

const cityData = {
  Валюта: ["USD", "RUB", "UZS", "EURO"],
};

type CityName = keyof typeof cityData;

const currencyMapping: Record<string, number> = {
  USD: 10,
  RUB: 20,
  UZS: 30,
  EURO: 40,
};

const ChekModal: React.FC<ChekModalProps> = ({ showModal, defaultUserId }) => {
  const { getUserList, getUserCheck, createUser } = userIndex();
  const [cities, setCities] = useState(cityData[provinceData[0] as CityName]);
  const [secondCity, setSecondCity] = useState<CityName>(
    provinceData[0] as CityName
  );
  const [isModalVisible, setIsModalVisible] = useState(true);
  const [accountName, setAccountName] = useState("");
  const [selectedOption, setSelectedOption] = useState<string | undefined>(
    defaultUserId ? String(defaultUserId) : undefined
  );

  const [users, setUsers] = useState<any[]>([]);
  const [currency, setCurrency] = useState<string>("USD");
  const [typeWallet, setTypeWallet] = useState<number | undefined>(
    defaultUserId ? 10 : undefined
  );

  const handleClose = () => {
    setIsModalVisible(false);
    showModal(null);
  };

  const onSecondCityChange = (value: CityName) => {
    setSecondCity(value);
  };

  const fetchUsers = async () => {
    try {
      const response = await getUserList();
      console.log("chek ma'lumotlar", response.data);
      setUsers(response.data || []);
    } catch (error) {
      console.error("Error fetching visitors:", error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        if (defaultUserId) {
          await getUserCheck(defaultUserId);
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, [defaultUserId]);

  const createUserAccount = async (userData: any) => {
    try {
      const response = await createUser(userData);
      console.log("User account created:", response.data);
    } catch (error) {
      console.error("Error creating user account:", error);
    }
  };

  const handleAddAccount = async () => {
    try {
      const userData = {
        name: accountName,
        cashflowId: Number(selectedOption),
        currency: currencyMapping[currency],
        typeWallet: typeWallet || 10,
      };

      console.log("Sending data to server:", userData); // Add this line for debugging

      const response = await createUser(userData);

      if (response.status === 200) {
        console.log("User account created:", response.data);
      } else {
        console.error(
          "Error creating user account. Server responded with:",
          response
        );
      }
    } catch (error) {
      console.error("Error creating user account:", error);
    }

    handleClose();
  };

  return (
    <Modal
      title="Добавить счет"
      open={isModalVisible}
      onCancel={handleClose}
      footer={null}
      className="text-center"
    >
      <br />
      <div className="flex justify-between items-center mb-2">
        <p>Касса</p>
        <Select
          className=""
          showSearch
          style={{ width: "66%", height: 45 }}
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
          options={
            users.map((user) => ({
              label: user.name,
              value: String(user.id),
            })) as { label: string; value: string }[]
          }
          value={selectedOption}
          onChange={(value) => {
            setSelectedOption(value);
          }}
        />
      </div>
      <div className="flex justify-start gap-24 items-center">
        <p>Имя счета</p>
        <Input
          placeholder="Введите имя счета"
          className="w-[65%] h-[45px]"
          value={accountName}
          onChange={(e) => setAccountName(e.target.value)}
        />
      </div>
      <div className="flex justify-start gap-[105px] items-center mt-5">
        <p>Тип счета</p>
        <Radio.Group
          name="radiogroup"
          value={typeWallet}
          onChange={(e) => setTypeWallet(e.target.value)}
        >
          <Radio value={10}>Наличный</Radio>
          <Radio value={20}>Банковский</Radio>
        </Radio.Group>
      </div>
      <div className="flex justify-start gap-[120px] items-center mt-5">
        <p>Валюта</p>
        <Space wrap>
          <Select
            style={{ width: 120 }}
            value={currency}
            onChange={(value) => setCurrency(value as string)}
            options={
              cities?.map((city) => ({ label: city, value: city })) || []
            }
          />
        </Space>
      </div>
      <div className="w-full flex justify-center items-center ">
        <button
          onClick={handleAddAccount}
          className="bg-blue-500 mt-5 rounded-md text-white w-[50%] h-[40px] flex items-center gap-3 justify-center shadow-md shadow-[#777777] border-none"
        >
          <IoWallet className="text-white text-2xl" /> Добавить счет
        </button>
      </div>
    </Modal>
  );
};

export default ChekModal;
