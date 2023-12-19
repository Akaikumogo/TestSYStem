import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { CiLogout } from "react-icons/ci";
import pic from "../../assets/user.png";

const SideBar = () => {
  const [burgerActive, setBurgerActive] = useState(false);
  const userinfo = localStorage.getItem("user2");
  const navigate = useNavigate();
  const role = userinfo ? JSON.parse(userinfo || "").role : null;
  // vaqtincha
  const {
    main,
    pos,
    wms,
    hr,
    budgeting,
    cashflow,
    logictics,
    crm,
    accountant,
    sc,
  }: any =
    role === "User"
      ? {
          main: false,
          pos: false,
          wms: false,
          hr: false,
          budgeting: false,
          cashflow: true,
          logictics: false,
          crm: false,
          accountant: false,
          sc: false,
        }
      : role === "Kassir"
      ? {
          main: true,
          pos: false,
          wms: false,
          hr: false,
          budgeting: false,
          cashflow: true,
          logictics: false,
          crm: false,
          accountant: false,
          sc: false,
        }
      : {
          main: false,
          pos: false,
          wms: false,
          hr: false,
          budgeting: false,
          cashflow: true,
          logictics: false,
          crm: false,
          accountant: false,
          sc: false,
        };

  //Vaqtincha
  const white = "#fff";
  const disable = "#888888";
  const standartstyle =
    "xl:text-[16px] 2xl:text-[18px] flex  w-[95%]  xl:h-[35px] 2xl:h-[45px]  justify-start  items-center   gap-3 overflow-x-auto 2xl:px-[15px] xl:px-[5px]  text-center py-1 2xl:rounded-r-2xl xl:rounded-r-xl";
  const disabledstyle =
    "text-[#888888] pointer-events-none  cursor-not-allowed";
  const ScreenSize = screen.width > 1280;

  return (
    <div
      className={`user text-white h-[100%]  flex flex-col gap-[15px]  transition-all  items-center  duration-[400ms] ease-in-out  bg-[#002D62]
        ${
          burgerActive
            ? "xl:w-[240px] 2xl:w-[400px] "
            : "xl:w-[70px] 2xl:w-[100px]"
        } `}
    >
      <div className="w-[100%]   justify-center   flex flex-col gap-[10px]  mt-[10px] ">
        <div
          className={
            "w-[100%]   h-[5vh] flex items-center" +
            (burgerActive
              ? " flex items-center justify-between px-5"
              : " flex items-center justify-center")
          }
        >
          {burgerActive ? (
            <div className="      w-[200px]  h-[24px] overflow-x-auto ">
              <h1 className=" w-[110px] text-[16px] font-bold">ERP system</h1>
            </div>
          ) : null}
          <button
            className="px-[10px] py-[10px] text-center text-[18px] rounded-full bg-[#00408B]"
            onClick={() => setBurgerActive((p) => !p)}
          >
            <GiHamburgerMenu />
          </button>
        </div>
        <div className="flex w-[100%]  h-[65px]  gap-[10px]  items-center    text-center  py-1 2xl:pl-[15px] xl:pl-[10px]   ">
          <img
            className={`rounded-full xl:w-[45px]  xl:h-[45px] 2xl:w-[65px]  shadow-md 2xl:h-[65px] transition-all    duration-[200ms]  ${
              burgerActive ? "xl:mr-[10px] " : ""
            } `}
            src={pic}
            alt=""
          />
          {burgerActive ? (
            <div className="2xl:w-[60%]  xl:w-[100%]  xl:h-[80%]       flex  overflow-x-auto ">
              <h1 className=" xl:text-[28px] text-[35px] text-start font-mono">
                User Name
              </h1>
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
      <div className="w-[100%] overflow-y-auto  h-[800px]  text-[24px]  ">
        <div className="flex flex-col h-auto items-start  2xl:gap-[20px] xl:gap-[10px] ">
          <NavLink
            className={` ${standartstyle} ${main ? " " : disabledstyle}`}
            to="/"
          >
            <div className="flex  justify-center  w-auto pl-[10px] items-center">
              <svg
                id="home_black_24dp"
                xmlns="http://www.w3.org/2000/svg"
                width={ScreenSize ? "45" : "35"}
                height={ScreenSize ? "45" : "35"}
                viewBox="0 0 47.464 47.464"
              >
                <path
                  id="Path_62"
                  data-name="Path 62"
                  d="M0,0H47.464V47.464H0Z"
                  fill="none"
                />
                <path
                  id="Path_63"
                  data-name="Path 63"
                  d="M22.353,8.527l9.888,8.9V32.872H28.286V22.4a1.341,1.341,0,0,0-.19-1.022,1.934,1.934,0,0,0-1.114-.377H17.564a1.716,1.716,0,0,0-.954.377,1.257,1.257,0,0,0-.189.905V32.872H12.464V17.426l9.888-8.9m-1-4.3L5.607,18.1a2.094,2.094,0,0,0-1,1.868,1.1,1.1,0,0,0,1.264,1.033H8.509V35.282a2.419,2.419,0,0,0,.2,1.31c.294.386.977.235.977.235h9.1s.968.129,1.365-.235.224-1.222.224-1.222V24.961H24.33v10.5s-.122.789.19,1.13,1.057.235,1.057.235h8.956a2.226,2.226,0,0,0,1.277-.235,1.414,1.414,0,0,0,.386-1.047V21.006h2.328s1.2.117,1.28-.974-.389-1.369-.981-1.927C34.6,14.124,27.359,7.592,23.535,4.225A2.185,2.185,0,0,0,21.357,4.225Z"
                  transform="translate(1.379 2.726)"
                  fill={main ? white : disable}
                />
              </svg>
            </div>

            {burgerActive ? (
              <div className=" w-[65%]  overflow-x-auto ">
                <h1 className="w-[10vw] text-start">Главная</h1>
              </div>
            ) : (
              <></>
            )}
          </NavLink>
          <NavLink
            className={` ${standartstyle} ${pos ? " " : disabledstyle}`}
            to="pos-system"
          >
            <div className="flex  justify-center  w-auto pl-[15px] items-center">
              <svg
                id="Group_34"
                data-name="Group 34"
                width={ScreenSize ? "35" : "25"}
                height={ScreenSize ? "32" : "25"}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 31.115 38.626"
              >
                <path
                  id="Path_47"
                  data-name="Path 47"
                  d="M15.833,7.473a1.74,1.74,0,0,1,1.734-1.745H34.9a1.74,1.74,0,0,1,1.734,1.745v7.854A1.74,1.74,0,0,1,34.9,17.072H17.567a1.74,1.74,0,0,1-1.734-1.745ZM19.3,9.218v4.363h13.87V9.218Z"
                  transform="translate(-10.678 0.433)"
                  fill={pos ? white : disable}
                  fillRule="evenodd"
                />
                <path
                  id="Path_48"
                  data-name="Path 48"
                  d="M21.687,19.745A1.719,1.719,0,1,1,19.968,18,1.732,1.732,0,0,1,21.687,19.745Z"
                  transform="translate(-10.465 1.324)"
                  fill={pos ? white : disable}
                />
                <path
                  id="Path_49"
                  data-name="Path 49"
                  d="M19.968,26.4a1.746,1.746,0,1,0-1.718-1.745A1.732,1.732,0,0,0,19.968,26.4Z"
                  transform="translate(-10.465 1.686)"
                  fill={pos ? white : disable}
                />
                <path
                  id="Path_50"
                  data-name="Path 50"
                  d="M21.687,29.563a1.719,1.719,0,1,1-1.718-1.745A1.732,1.732,0,0,1,21.687,29.563Z"
                  transform="translate(-10.465 2.081)"
                  fill={pos ? white : disable}
                />
                <path
                  id="Path_51"
                  data-name="Path 51"
                  d="M25.607,21.491a1.746,1.746,0,1,0-1.718-1.745A1.732,1.732,0,0,0,25.607,21.491Z"
                  transform="translate(-10.05 1.324)"
                  fill={pos ? white : disable}
                />
                <path
                  id="Path_52"
                  data-name="Path 52"
                  d="M27.326,24.654a1.719,1.719,0,1,1-1.718-1.745A1.732,1.732,0,0,1,27.326,24.654Z"
                  transform="translate(-10.05 1.686)"
                  fill={pos ? white : disable}
                />
                <path
                  id="Path_53"
                  data-name="Path 53"
                  d="M25.607,31.309a1.746,1.746,0,1,0-1.718-1.745A1.732,1.732,0,0,0,25.607,31.309Z"
                  transform="translate(-10.05 2.081)"
                  fill={pos ? white : disable}
                />
                <path
                  id="Path_54"
                  data-name="Path 54"
                  d="M32.965,19.745A1.719,1.719,0,1,1,31.246,18,1.732,1.732,0,0,1,32.965,19.745Z"
                  transform="translate(-9.634 1.324)"
                  fill={pos ? white : disable}
                />
                <path
                  id="Path_55"
                  data-name="Path 55"
                  d="M31.246,26.4a1.746,1.746,0,1,0-1.718-1.745A1.732,1.732,0,0,0,31.246,26.4Z"
                  transform="translate(-9.634 1.686)"
                  fill={pos ? white : disable}
                />
                <path
                  id="Path_56"
                  data-name="Path 56"
                  d="M32.965,29.563a1.719,1.719,0,1,1-1.718-1.745A1.732,1.732,0,0,1,32.965,29.563Z"
                  transform="translate(-9.634 2.081)"
                  fill={pos ? white : disable}
                />
                <path
                  id="Path_57"
                  data-name="Path 57"
                  d="M11,3.511A3.485,3.485,0,0,1,14.457,0h24.2a3.485,3.485,0,0,1,3.457,3.511v31.6a3.485,3.485,0,0,1-3.457,3.511h-24.2A3.485,3.485,0,0,1,11,35.114Zm27.658,0h-24.2v31.6h24.2Z"
                  transform="translate(-11 0)"
                  fill={pos ? white : disable}
                  fillRule="evenodd"
                />
              </svg>
            </div>

            {burgerActive ? (
              <div className="  w-[65%] h-full   overflow-x-auto ">
                <h1 className="w-full text-start">POS система</h1>
              </div>
            ) : (
              <></>
            )}
          </NavLink>
          <NavLink
            className={` ${standartstyle} ${wms ? " " : disabledstyle}`}
            to="wms-system"
          >
            <div className="flex  justify-center  w-auto pl-[10px] items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={ScreenSize ? "45" : "35"}
                height={ScreenSize ? "35" : "25"}
                viewBox="0 0 35.714 38.617"
              >
                <g
                  id="Group_35"
                  data-name="Group 35"
                  transform="translate(1.856 1.5)"
                >
                  <path
                    id="Path_43"
                    data-name="Path 43"
                    d="M44,120.33V103.892a1.332,1.332,0,0,0-.68-1.163L28.652,94.48a1.333,1.333,0,0,0-1.307,0L12.68,102.73a1.332,1.332,0,0,0-.68,1.163V120.33a1.335,1.335,0,0,0,.68,1.163l14.665,8.249a1.33,1.33,0,0,0,1.307,0l14.665-8.249A1.335,1.335,0,0,0,44,120.33Z"
                    transform="translate(-12 -94.309)"
                    fill="none"
                    stroke={wms ? white : disable}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                  />
                  <path
                    id="Path_44"
                    data-name="Path 44"
                    d="M35.669,115.928v-8.666L19.5,98.344"
                    transform="translate(-11.501 -94.041)"
                    fill="none"
                    stroke={wms ? white : disable}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                  />
                  <path
                    id="Path_45"
                    data-name="Path 45"
                    d="M43.8,102.66l-15.657,8.9-15.972-8.9"
                    transform="translate(-11.989 -93.753)"
                    fill="none"
                    stroke={wms ? white : disable}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                  />
                  <path
                    id="Path_46"
                    data-name="Path 46"
                    d="M27.158,111,27,128.8"
                    transform="translate(-11.001 -93.198)"
                    fill="none"
                    stroke={wms ? white : disable}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                  />
                </g>
              </svg>
            </div>

            {burgerActive ? (
              <div className="  w-[65%] h-full   overflow-x-auto ">
                <h1 className="w-full text-start">WMS система</h1>
              </div>
            ) : (
              <></>
            )}
          </NavLink>
          <NavLink
            className={` ${standartstyle} ${hr ? " " : disabledstyle}`}
            to="hr"
          >
            <div className="flex  justify-center  w-auto pl-[10px] items-center">
              <svg
                id="people_alt_white_24dp"
                xmlns="http://www.w3.org/2000/svg"
                width={ScreenSize ? "45" : "35"}
                height={ScreenSize ? "35" : "25"}
                viewBox="0 0 39 39"
              >
                <g
                  id="Group_37"
                  data-name="Group 37"
                  transform="translate(0 0)"
                >
                  <rect
                    id="Rectangle_10"
                    data-name="Rectangle 10"
                    width="39"
                    height="39"
                    fill="none"
                  />
                </g>
                <g
                  id="Group_39"
                  data-name="Group 39"
                  transform="translate(1.409 7.242)"
                >
                  <g id="Group_38" data-name="Group 38">
                    <path
                      id="Path_64"
                      data-name="Path 64"
                      d="M16.67,13.13c2.237,1.518,3.8,3.576,3.8,6.319v4.9h6.531v-4.9C27.005,15.889,21.176,13.783,16.67,13.13Z"
                      transform="translate(8.915 1.777)"
                      fill={hr ? white : disable}
                    />
                    <path
                      id="Path_65"
                      data-name="Path 65"
                      d="M15.842,17.062A6.531,6.531,0,0,0,15.842,4a6.822,6.822,0,0,0-2.172.392,9.763,9.763,0,0,1,0,12.278A6.822,6.822,0,0,0,15.842,17.062Z"
                      transform="translate(7.016 -4)"
                      fill={hr ? white : disable}
                    />
                    <path
                      id="Path_66"
                      data-name="Path 66"
                      d="M11.531,17.062A6.531,6.531,0,1,0,5,10.531,6.529,6.529,0,0,0,11.531,17.062Zm0-9.8a3.265,3.265,0,1,1-3.265,3.265A3.275,3.275,0,0,1,11.531,7.265Z"
                      transform="translate(1.531 -4)"
                      fill={hr ? white : disable}
                    />
                    <path
                      id="Path_67"
                      data-name="Path 67"
                      d="M14.062,13C9.7,13,1,15.188,1,19.531v4.9H27.123v-4.9C27.123,15.188,18.421,13,14.062,13Zm9.8,8.164H4.265V19.547c.327-1.176,5.388-3.282,9.8-3.282s9.47,2.106,9.8,3.265Z"
                      transform="translate(-1 1.694)"
                      fill={hr ? white : disable}
                    />
                  </g>
                </g>
              </svg>
            </div>

            {burgerActive ? (
              <div className="  w-[65%] h-full   overflow-x-auto ">
                <h1 className="w-full text-start">HR модуль</h1>
              </div>
            ) : (
              <></>
            )}
          </NavLink>
          <NavLink
            className={` ${standartstyle} ${budgeting ? " " : disabledstyle}`}
            to="budgeting"
          >
            <div className="flex  justify-center  w-auto pl-[10px] mr-[5px] items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={ScreenSize ? "44" : "35"}
                height={ScreenSize ? "32" : "25"}
                viewBox="0 0 32.413 32.412"
              >
                <path
                  id="Path_68"
                  data-name="Path 68"
                  d="M33.78,14.97a9.471,9.471,0,0,0-8.006-8.006V14.97Zm1.447,2.7h-10.8a1.35,1.35,0,0,1-1.352-1.35V5.516a1.351,1.351,0,0,1,1.352-1.35A12.169,12.169,0,0,1,36.579,16.32,1.35,1.35,0,0,1,35.227,17.67ZM21.887,20.336H35.093a1.49,1.49,0,0,1,1.478,1.638,16.246,16.246,0,1,1-17.8-17.8A1.488,1.488,0,0,1,20.409,5.65V18.86A1.477,1.477,0,0,0,21.887,20.336Z"
                  transform="translate(-4.166 -4.166)"
                  fill={budgeting ? white : disable}
                  fillRule="evenodd"
                />
              </svg>
            </div>

            {burgerActive ? (
              <div className="  w-[100%]  h-full    overflow-x-auto ">
                <h1 className="w-auto h-[35px]   text-start">
                  Budgeting модуль
                </h1>
              </div>
            ) : (
              <></>
            )}
          </NavLink>
          <NavLink
            className={` ${standartstyle} ${cashflow ? " " : disabledstyle}`}
            to="cashflow"
          >
            <div className="flex  justify-center  w-auto pl-[10px] items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={ScreenSize ? "43" : "35"}
                height={ScreenSize ? "33" : "28"}
                viewBox="0 0 33.901 32.416"
              >
                <path
                  id="Path_69"
                  data-name="Path 69"
                  d="M29.111,21.4A12.966,12.966,0,0,0,10.726,5.114L9.118,2.3A16.209,16.209,0,0,1,31.934,23.032l2.175,1.254-6.75,3.588-.267-7.639ZM5.208,11.343A12.966,12.966,0,0,0,23.593,27.63L25.2,30.445A16.209,16.209,0,0,1,2.385,9.711L.208,8.459l6.75-3.588.267,7.639L5.206,11.345Zm6.28,8.27H20.4a.81.81,0,1,0,0-1.621H13.918a4.051,4.051,0,1,1,0-8.1h1.621V8.269H18.78V9.89h4.051v3.241H13.918a.81.81,0,1,0,0,1.621H20.4a4.051,4.051,0,1,1,0,8.1H18.78v1.621H15.539V22.854H11.488Z"
                  transform="translate(-0.208 -0.164)"
                  fill={cashflow ? white : disable}
                />
              </svg>
            </div>

            {burgerActive ? (
              <div className="  w-[65%]  overflow-x-auto ">
                <h1 className="w-[10vw] text-start">Касса</h1>
              </div>
            ) : (
              <></>
            )}
          </NavLink>
          <NavLink
            className={` ${standartstyle} ${logictics ? " " : disabledstyle}`}
            to="logistic"
          >
            <div className="flex  justify-center  w-auto pl-[12px] items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={ScreenSize ? "42" : "35"}
                height={ScreenSize ? "28" : "20"}
                viewBox="0 0 33.073 29.171"
              >
                <path
                  id="Path_70"
                  data-name="Path 70"
                  d="M32.32,29.559a1.654,1.654,0,1,1-1.654-1.621A1.638,1.638,0,0,1,32.32,29.559Zm-19.844,0a1.654,1.654,0,1,1-1.654-1.621A1.638,1.638,0,0,1,12.476,29.559Zm21.5-8.946V24.7H29.013V16.725Zm2.687-2.044-7.648-6V8.491a3.13,3.13,0,0,0-3-3.241H7.2a3.13,3.13,0,0,0-3,3.241V24.7a3.228,3.228,0,0,0,2.019,3.05,4.732,4.732,0,0,0-.365,1.812,4.962,4.962,0,0,0,9.922,0,4.677,4.677,0,0,0-.306-1.621H26.011a4.677,4.677,0,0,0-.306,1.621,4.962,4.962,0,0,0,9.922,0,4.677,4.677,0,0,0-.306-1.621h.306a1.636,1.636,0,0,0,1.654-1.621V19.835A1.61,1.61,0,0,0,36.661,18.569Z"
                  transform="translate(-4.208 -5.25)"
                  fill={logictics ? white : disable}
                  fillRule="evenodd"
                />
              </svg>
            </div>

            {burgerActive ? (
              <div className="  w-[65%]  overflow-x-auto ">
                <h1 className="w-[10vw] text-start">Логистика</h1>
              </div>
            ) : (
              <></>
            )}
          </NavLink>
          <NavLink
            className={` ${standartstyle} ${crm ? " " : disabledstyle}`}
            to="crm-system"
          >
            <div className="flex  justify-center  w-auto pl-[10px] items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={ScreenSize ? "40" : "35"}
                height={ScreenSize ? "30" : "25"}
                viewBox="0 0 30.955 32.171"
              >
                <g
                  id="Group_40"
                  data-name="Group 40"
                  transform="translate(1.5 1.5)"
                >
                  <path
                    id="Path_71"
                    data-name="Path 71"
                    d="M25.174,26.13a4.862,4.862,0,1,0-4.862-4.862A4.862,4.862,0,0,0,25.174,26.13Z"
                    transform="translate(-9.374 -8.506)"
                    fill="none"
                    stroke={crm ? white : disable}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                  />
                  <path
                    id="Path_72"
                    data-name="Path 72"
                    d="M6.25,21.094H9.9"
                    transform="translate(-6.25 -9.547)"
                    fill="none"
                    stroke={crm ? white : disable}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                  />
                  <path
                    id="Path_73"
                    data-name="Path 73"
                    d="M6.25,13.281H9.9"
                    transform="translate(-6.25 -7.812)"
                    fill="none"
                    stroke={crm ? white : disable}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                  />
                  <path
                    id="Path_74"
                    data-name="Path 74"
                    d="M6.25,28.906H9.9"
                    transform="translate(-6.25 -11.282)"
                    fill="none"
                    stroke={crm ? white : disable}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                  />
                  <path
                    id="Path_75"
                    data-name="Path 75"
                    d="M6.25,36.719H9.9"
                    transform="translate(-6.25 -13.018)"
                    fill="none"
                    stroke={crm ? white : disable}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                  />
                  <path
                    id="Path_76"
                    data-name="Path 76"
                    d="M35.246,34.205V7.465A1.215,1.215,0,0,0,34.031,6.25H12.153a1.215,1.215,0,0,0-1.215,1.215v26.74a1.215,1.215,0,0,0,1.215,1.215H34.031A1.215,1.215,0,0,0,35.246,34.205Z"
                    transform="translate(-7.291 -6.25)"
                    fill="none"
                    stroke={crm ? white : disable}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                  />
                  <path
                    id="Path_77"
                    data-name="Path 77"
                    d="M17.969,31.825a9.116,9.116,0,0,1,13.37,0"
                    transform="translate(-8.853 -11.282)"
                    fill="none"
                    stroke={crm ? white : disable}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                  />
                </g>
              </svg>
            </div>

            {burgerActive ? (
              <div className="  w-[100%]  h-full    overflow-x-auto ">
                <h1 className="w-[200px] h-[35px]  mt-[5px]  text-start">
                  CRM система
                </h1>
              </div>
            ) : (
              <></>
            )}
          </NavLink>
          {/* Accauntant activ holatda ikki xil shuning uchun ikkita svg yuborilgan  */}
          <NavLink
            className={` ${standartstyle} ${accountant ? " " : disabledstyle}`}
            to="accountant"
          >
            <div className="flex  justify-center  w-auto pl-[10px] items-center">
              {accountant ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={ScreenSize ? "42" : "39"}
                  height={ScreenSize ? "30" : "25"}
                  viewBox="0 0 34 31"
                >
                  <g
                    id="Group_42"
                    data-name="Group 42"
                    transform="translate(0.463 0.627)"
                  >
                    <ellipse
                      id="Ellipse_11"
                      data-name="Ellipse 11"
                      cx="14.5"
                      cy="15"
                      rx="14.5"
                      ry="15"
                      transform="translate(-0.463 -0.627)"
                      fill="#fff"
                    />
                    <g
                      id="Group_41"
                      data-name="Group 41"
                      transform="translate(9.863 5.291)"
                    >
                      <rect
                        id="Rectangle_11"
                        data-name="Rectangle 11"
                        width="24"
                        height="12"
                        rx="4"
                        transform="translate(-0.326 0.082)"
                        fill="#7600ff"
                      />
                      <path
                        id="Path_78"
                        data-name="Path 78"
                        d="M23,20H38.381m0,2.563H23"
                        transform="translate(-19.761 -13.987)"
                        fill="none"
                        stroke="#fff"
                        strokeWidth="2"
                      />
                      <rect
                        id="Rectangle_12"
                        data-name="Rectangle 12"
                        width="24"
                        height="11"
                        rx="4"
                        transform="translate(-0.326 14.082)"
                        fill="#454271"
                      />
                      <path
                        id="Path_79"
                        data-name="Path 79"
                        d="M23,44H38.381m0,2.563H23"
                        transform="translate(-19.761 -24.315)"
                        fill="none"
                        stroke="#fff"
                        strokeWidth="2"
                      />
                    </g>
                  </g>
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={ScreenSize ? "42" : "39"}
                  height={ScreenSize ? "30" : "25"}
                  viewBox="0 0 34 31"
                >
                  <g
                    id="Group_42"
                    data-name="Group 42"
                    transform="translate(0.463 0.627)"
                  >
                    <ellipse
                      id="Ellipse_11"
                      data-name="Ellipse 11"
                      cx="14.5"
                      cy="15"
                      rx="14.5"
                      ry="15"
                      transform="translate(-0.463 -0.627)"
                      fill="#888"
                    />
                    <g
                      id="Group_41"
                      data-name="Group 41"
                      transform="translate(9.863 5.291)"
                    >
                      <rect
                        id="Rectangle_11"
                        data-name="Rectangle 11"
                        width="24"
                        height="12"
                        rx="4"
                        transform="translate(-0.326 0.082)"
                        fill="#a7a7a7"
                      />
                      <path
                        id="Path_78"
                        data-name="Path 78"
                        d="M23,20H38.381m0,2.563H23"
                        transform="translate(-19.761 -13.987)"
                        fill="none"
                        stroke="#ccc"
                        strokeWidth="2"
                      />
                      <rect
                        id="Rectangle_12"
                        data-name="Rectangle 12"
                        width="24"
                        height="11"
                        rx="4"
                        transform="translate(-0.326 14.082)"
                        fill="#575757"
                      />
                      <path
                        id="Path_79"
                        data-name="Path 79"
                        d="M23,44H38.381m0,2.563H23"
                        transform="translate(-19.761 -24.315)"
                        fill="none"
                        stroke="#ccc"
                        strokeWidth="2"
                      />
                    </g>
                  </g>
                </svg>
              )}
            </div>

            {burgerActive ? (
              <div className="  w-[100%]  h-full    overflow-x-auto ">
                <h1 className="w-[200px] h-[35px]  mt-[5px]  text-start">
                  Бухгалтерия
                </h1>
              </div>
            ) : (
              <></>
            )}
          </NavLink>
          <NavLink
            className={` ${standartstyle} ${sc ? " " : disabledstyle}`}
            to="sc-system"
          >
            <div className="flex  justify-center  w-auto pl-[10px] items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={ScreenSize ? "45" : "40"}
                height={ScreenSize ? "28" : "25"}
                viewBox="0 0 34 30.241"
              >
                <g id="chain" transform="translate(-10 -23)">
                  <g
                    id="Group_243"
                    data-name="Group 243"
                    transform="translate(10 23)"
                  >
                    <path
                      id="Path_419"
                      data-name="Path 419"
                      d="M42.531,43.161H39.637V39.273a2.253,2.253,0,0,0-2.175-2.319H28.073V33.08h2.16a1.5,1.5,0,0,0,1.454-1.555v-6.97A1.5,1.5,0,0,0,30.233,23H23.724a1.5,1.5,0,0,0-1.454,1.555v6.97a1.5,1.5,0,0,0,1.454,1.555h1.44v3.874H15.789a2.244,2.244,0,0,0-2.175,2.319v3.888h-2.16A1.5,1.5,0,0,0,10,44.716v6.97a1.5,1.5,0,0,0,1.454,1.555h6.495A1.5,1.5,0,0,0,19.4,51.686v-6.97a1.5,1.5,0,0,0-1.454-1.555h-2.16V39.287h9.4v3.874h-1.44A1.5,1.5,0,0,0,22.3,44.716v6.97a1.5,1.5,0,0,0,1.454,1.555h6.495A1.5,1.5,0,0,0,31.7,51.686v-6.97a1.5,1.5,0,0,0-1.454-1.555h-2.16V39.287h9.4v3.874h-1.44A1.5,1.5,0,0,0,34.6,44.716v6.97a1.5,1.5,0,0,0,1.454,1.555h6.495A1.5,1.5,0,0,0,44,51.686v-6.97a1.523,1.523,0,0,0-1.469-1.555Z"
                      transform="translate(-10 -23)"
                      fill={sc ? white : disable}
                    />
                  </g>
                </g>
              </svg>
            </div>

            {burgerActive ? (
              <div className="  w-[100%]  h-full    overflow-x-auto ">
                <h1 className="w-[200px] h-[35px]  mt-[5px]  text-start">
                  SC система
                </h1>
              </div>
            ) : (
              <></>
            )}
          </NavLink>
          {/* DONE */}
        </div>
      </div>
      <button
        className="w-full  2xl:h-[60px] flex items-center  2xl:px-[20px] xl:px-[15px] mb-[10px]"
        onClick={() => {
          localStorage.removeItem("user");
          navigate("signin");
        }}
      >
        <div className="2xl:mx-[10px]   ">
          <CiLogout
            className={` 2xl:text-[40px] xl:text-[35px] ${
              burgerActive ? "" : ""
            }`}
          />
        </div>
        <div className={`${burgerActive ? "" : "hidden"}`}>
          {burgerActive ? (
            <div className=" ml-[10px] flex items-center  overflow-x-auto ">
              <h1 className="text-start 2xl:text-[20px] xl:text-[16px]">
                Выйти
              </h1>
            </div>
          ) : (
            <></>
          )}
        </div>
      </button>
    </div>
  );
};

export default SideBar;
