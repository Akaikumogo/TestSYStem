import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { CiLogout } from "react-icons/ci";
import pic from "../../assets/user.png";
import "./index.css";

const AdminSideBar = () => {
  const [burgerActive, setBurgerActive] = useState(false);
  const userinfo = localStorage.getItem("user");
  const navigate = useNavigate();
  const access = userinfo ? JSON.parse(userinfo || "").access : null;
  const { main, client }: any = access;
  const white = "#fff";
  const disable = "#888888";
  const ScreenSize = screen.width > 1280;
  const standartstyle =
    "xl:text-[16px] 2xl:text-[18px] flex  w-[95%]  xl:h-[35px] 2xl:h-[45px]  justify-start  items-center   gap-3 overflow-x-auto 2xl:px-[15px] xl:px-[5px]  text-center py-1 2xl:rounded-r-2xl xl:rounded-r-xl";
  const disabledstyle =
    "text-[#888888] pointer-events-none  cursor-not-allowed";

  return (
    <div
      className={`admin text-white h-[100%]  flex flex-col gap-[15px]  transition-all  items-center  duration-[400ms] ease-in-out  bg-[#535B65]
        ${
          burgerActive
            ? "xl:w-[240px] 2xl:w-[400px] lg:w-[200px] "
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
            className="px-[10px] py-[10px] text-center text-[18px] rounded-full bg-[#666E77]"
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
            className={` ${standartstyle} ${client ? " " : disabledstyle}`}
            to="erpdashboard/admin-client"
          >
            <div className="flex  justify-center  w-auto pl-[15px] items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={ScreenSize ? "45" : "25"}
                height={ScreenSize ? "45" : "25"}
                viewBox="0 0 38.571 30"
              >
                <path
                  id="id-card-solid"
                  d="M0,36.286H38.571A4.29,4.29,0,0,0,34.286,32h-30A4.29,4.29,0,0,0,0,36.286Zm0,2.143V57.714A4.29,4.29,0,0,0,4.286,62h30a4.29,4.29,0,0,0,4.286-4.286V38.429ZM4.286,57a3.568,3.568,0,0,1,3.569-3.569h7.862A3.568,3.568,0,0,1,19.286,57a.717.717,0,0,1-.717.717H5A.717.717,0,0,1,4.286,57Zm7.5-14.283A4.286,4.286,0,1,1,7.5,47,4.286,4.286,0,0,1,11.786,42.714Zm11.786,1.071a1.075,1.075,0,0,1,1.071-1.071h8.571a1.071,1.071,0,1,1,0,2.143H24.643A1.075,1.075,0,0,1,23.571,43.786Zm0,4.286A1.075,1.075,0,0,1,24.643,47h8.571a1.071,1.071,0,1,1,0,2.143H24.643A1.075,1.075,0,0,1,23.571,48.071Zm0,4.286a1.075,1.075,0,0,1,1.071-1.071h8.571a1.071,1.071,0,1,1,0,2.143H24.643A1.075,1.075,0,0,1,23.571,52.357Z"
                  transform="translate(0 -32)"
                  fill={client ? white : disable}
                />
              </svg>
            </div>

            {burgerActive ? (
              <div className="  w-[65%] h-full   overflow-x-auto ">
                <h1 className="w-full text-start">Клиенты</h1>
              </div>
            ) : (
              <></>
            )}
          </NavLink>
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

export default AdminSideBar;
