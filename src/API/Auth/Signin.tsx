import api from "../index";

const useSignIn = () => {
  const postSignIn = async (user: object) => {
    return (await api.post("api/auth/SignIn", user)).data;
  };
  return {
    postSignIn,
  };
};
export default useSignIn;
