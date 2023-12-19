import Table from "../../../../Core/Tables/Table";

export const ManagamentDetails = () => {
  const tableConfigs = [
    { name: "№", size: "5%" },
    { name: "Дата", size: "13%" },
    { name: "Приход/Расход", size: "13%" },
    { name: "Основание", size: "12%" },
    { name: "Категория 1", size: "12%" },
    { name: "Категория 2", size: "15%" },
    { name: "Категория 3", size: "13%" },
    { name: "Категория 4", size: "13%" },
    { name: "", size: "13%" },
  ];
  const users = [
    {
      id: 1,
      data: "01.02.2021 18:33",
      Метод: "Наличные",
      IncomeOutput: "-17 000 000 сум",
      Base: "Заказ: #3774",
      Description: "Аутсорсинг",
      name: "Александр",
      Check: "Нет",
    },
    {
      id: 2,
      data: "01.02.2021 18:33",
      Метод: "Наличные",
      IncomeOutput: "-17 000 000 сум",
      Base: "Заказ: #3774",
      Description: "Аутсорсинг",
      name: "Александр",
      Check: "Нет",
    },
    {
      id: 3,
      data: "01.02.2021 18:33",
      Метод: "Наличные",
      IncomeOutput: "-17 000 000 сум",
      Base: "Заказ: #3774",
      Description: "Аутсорсинг",
      name: "Александр",
      Check: "Нет",
    },
    {
      id: 4,
      data: "01.02.2021 18:33",
      Метод: "Наличные",
      IncomeOutput: "-17 000 000 сум",
      Base: "Заказ: #3774",
      Description: "Аутсорсинг",
      name: "Александр",
      Check: "Нет",
    },
    {
      id: 5,
      data: "01.02.2021 18:33",
      Метод: "Наличные",
      IncomeOutput: "-17 000 000 сум",
      Base: "Заказ: #3774",
      Description: "Аутсорсинг",
      name: "Александр",
      Check: "Нет",
    },
    {
      id: 6,
      data: "01.02.2021 18:33",
      Метод: "Наличные",
      IncomeOutput: "-17 000 000 сум",
      Base: "Заказ: #3774",
      Description: "Аутсорсинг",
      name: "Александр",
      Check: "Нет",
    },
    {
      id: 7,
      data: "01.02.2021 18:33",
      Метод: "Наличные",
      IncomeOutput: "-17 000 000 сум",
      Base: "Заказ: #3774",
      Description: "Аутсорсинг",
      name: "Александр",
      Check: "Нет",
    },
    {
      id: 8,
      data: "01.02.2021 18:33",
      Метод: "Наличные",
      IncomeOutput: "-17 000 000 сум",
      Base: "Заказ: #3774",
      Description: "Аутсорсинг",
      name: "Александр",
      Check: "Нет",
    },
    {
      id: 9,
      data: "01.02.2021 18:33",
      Метод: "Наличные",
      IncomeOutput: "-17 000 000 сум",
      Base: "Заказ: #3774",
      Description: "Аутсорсинг",
      name: "Александр",
      Check: "Нет",
    },
    {
      id: 10,
      data: "01.02.2021 18:33",
      Метод: "Наличные",
      IncomeOutput: "-17 000 000 сум",
      Base: "Заказ: #3774",
      Description: "Аутсорсинг",
      name: "Александр",
      Check: "Нет",
    },
  ];
  return (
    <div className="w-full h-[85vh] border">
      <Table
        title=""
        tableConfigs={tableConfigs}
        data={users}
        height={70}
        button={() => {}}
      />
    </div>
  );
};
