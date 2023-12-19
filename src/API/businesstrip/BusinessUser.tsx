import api from "../index";

const config = {
  headers: {
    Authorization: `Bearer ${localStorage.getItem("Token")}`,
    "Content-Type": "application/json",
  },
};

const BusinessUser = () => {
  const getBusinessUserList = () =>
    api.get(
      "http://103.125.217.96:83/api/secondments",
      config
    );
//   const getUserDelete = () =>
//     api.delete("http://103.125.217.96:83/api/cashflows/", config);
  return {
    getBusinessUserList,
    // getUserDelete,
  };
};

export default BusinessUser;
