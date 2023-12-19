import HeaderTabs from "../../../Core/HeaderTabs";

const Report = () => {
  return (
    <div className="xl:w-[90vw]  flex flex-col  justify-between 2xl:w-[93vw] h-[96vh] my-auto">
      <div className="flex  h-[70px] justify-between p-[1px] items-center">
        <div className="flex gap-[20px] items-center">
          <h1 className="text-[30px] font-bold text-[#102769]">Касса</h1>
          <HeaderTabs
            value={[
              { link: "management", view: "Управление" },
              { link: "cashflow", view: "Касса" },
              { link: "business-trip", view: "Командировка" },
              { link: "report", view: "Отчеты" },
            ]}
            slice={2}
          />
        </div>
   

      </div>
 
    </div>
  );
};

export default Report;
