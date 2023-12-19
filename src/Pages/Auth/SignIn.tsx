import { Password } from "primereact/password";
import { useState, useRef, useEffect } from "react";
import PhoneInput from "react-phone-input-2";
import "./index.css";
import "react-phone-input-2/lib/style.css";
// import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import useSignIn from "../../API/Auth/Signin";
import { useMutation } from "react-query";
import { notification, Space } from "antd";

type NotificationType = "success" | "info" | "warning" | "error";

interface User {
  phoneNumber: string;
  password: string;
}
const SignIn = () => {
  const { postSignIn } = useSignIn();
  const navigate = useNavigate();
  const [phoneNumber, setPhoneNumber] = useState("+998");
  const [password, setPassword] = useState("");
  const [valid, setValid] = useState(true);
  const passwordInput = useRef<Password>(null);
  const [api, contextHolder] = notification.useNotification();
  const openNotificationWithIcon = (type: NotificationType) => {
    api[type]({
      message: "Parol yoki Login xato",
      duration: 3,
    });
  };
  const openNotificationWithiconNetwork = (type: NotificationType) => {
    api[type]({
      message: "Tarmoq bilan aloqa mavjud emas",
      duration: 3,
    });
  };
  const openNotificationWithIconSucces = (type: NotificationType) => {
    api[type]({
      message: "Tizimga muvofaqqiyatli kirdingiz",
      duration: 1,
    });
  };
  const validatePhone = (number: string) => {
    const regex = /^\+998\d{9}$/;
    return regex.test(number);
  };
  const handleChange = (value: string) => {
    const formattedValue = value.replace(/\D/g, "");
    setPhoneNumber("+" + formattedValue);
    setValid(validatePhone("+" + formattedValue));
  };
  const handleKeyDown = (e: any) => {
    // Mashqni o'chirish
    if (e.key === "Backspace" && e.target.value.length <= 4) {
      e.preventDefault();
    }
  };
  useEffect(() => {
    if (phoneNumber.length === 13) {
      passwordInput?.current?.focus();
    }
  }, [phoneNumber]);
  const signInMutation = useMutation((user: User) => postSignIn(user));
  const signIn = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const user: User = {
      phoneNumber,
      password,
    };
    try {
      console.log(user);
      const token = await signInMutation.mutateAsync(user);
      const data = jwtDecode(token);
      localStorage.setItem("Token", JSON.stringify(token));
      localStorage.setItem("user", JSON.stringify(data));
      openNotificationWithIconSucces("success");
      setTimeout(() => {
        navigate("/");
      }, 1500);
    } catch (error: any) {
      error.message === "Request failed with status code 401"
        ? openNotificationWithIcon("error")
        : openNotificationWithiconNetwork("error");
    }
  };

  return (
    <>
      {contextHolder}

      <div className="w-screen h-screen flex items-center">
        <div className="w-[40%] h-[100vh]  background"></div>
        <div className="w-[60%] h-[100%] flex justify-center items-center bg-[#EFF6FF]">
          <Space></Space>
          <div className="w-[500px] h-[450px] shadow-md rounded-xl px-[30px] py-[30px] border bg-white">
            <h1 className="my-text ml-[20px] text-[36px] text-[#102769] font-bold">
              Вход в систему
            </h1>
            <form
              className="h-[300px] w-full flex flex-col justify-center  items-center"
              onSubmit={(e) => signIn(e)}
            >
              <div className=" w-full flex flex-col justify-evenly  items-center   gap-[60px] h-[200px]">
                <div
                  className={`1phone-wrapper border  transition-all duration-200 py-[2px] px-[5px] ease-out rounded-md  w-[90%]  mx-auto  flex items-center justify-center
                ${valid ? "" : "border-red-500 border"}`}
                >
                  <PhoneInput
                    country={"uz"}
                    onlyCountries={["uz"]}
                    value={phoneNumber}
                    onChange={handleChange}
                    placeholder="+998(XX)XXX-XX-XX"
                    isValid={valid}
                    inputProps={{
                      name: "phone",
                      required: { valid },
                      autoFocus: true,
                      className: "input-phone",
                      onKeyDown: handleKeyDown, // Mashqni o'chirish
                    }}
                  />
                </div>
                <span className="p-float-label">
                  <Password
                    inputClassName="custom-input"
                    inputId="password"
                    name="password"
                    toggleMask
                    required
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                    minLength={8}
                    feedback={false}
                    ref={passwordInput}
                  />
                  <label htmlFor="password" className="pasword-label mylabel">
                    Password
                  </label>
                </span>
              </div>
              <div className="w-full h-[80px] flex justify-center items-center   ">
                <button
                  type="submit"
                  disabled={phoneNumber.length !== 13 || password.length <= 8}
                  className="text-white disabled:pointer-events-none disabled:opacity-70 transition-all duration-100 ease-in-out w-[50%]  h-[50px] rounded-[10px] bg-[#62BDFF]  hover:bg-[#57a1d6]  "
                >
                  Вход
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
