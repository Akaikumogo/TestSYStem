import HeaderAdminSearch from "../../../../Core/HeaderAdminSearch";
import HeaderAdminBtn from "../../../../Core/ClientRegistrationModals/ClientRegistrationModal";
import ClientTable from "./ClientTable";
const Clients = () => {
  return (
    <div className="content w-[95vw] p-[20px] ">
      <div className=" ">


        <div style={{ alignItems: 'baseline' }} className="content_header flex justify-between  ">
          <div className="header-left max-h-[50px]  ">
            <h1 className="text-[35px] font-semibold">Клиенты</h1>
          </div>
          <div style={{ marginLeft: '22px' }} className="header-right  w-[40%]   justify-end flex align-baseline items-center">
            <HeaderAdminSearch />
            <HeaderAdminBtn />
          </div>

        </div>
        <div className="content_body">
          <ClientTable />
        </div>
      </div>
    </div>
  );
};

export default Clients