import { useQuery, useMutation } from "react-query";
import api from "../index";

const getAllUsers = async () => {
  const response = await api.get("/api/users/All");
  return response.data;
};

const addImageToUser = async (userData: any) => {
  const response = await api.post("/api/users/Add-image-to-user", userData);
  return response.data;
};

const deleteUserById = async (userId: number) => {
  const response = await api.delete(`/api/users/${userId}-delete-database`);
  return response.data;
};

const changePassword = async (passwordData: any) => {
  const response = await api.put("/api/users/change-password", passwordData);
  return response.data;
};

const updateUser = async (userData: any) => {
  const response = await api.put("/api/users", userData);
  return response.data;
};

const changeRoleOfUser = async (userData: any) => {
  const response = await api.put("/api/users/Change-Role-of-User", userData);
  return response.data;
};

const changePasswordByAdmin = async (passwordData: any) => {
  const response = await api.put(
    "/api/users/change-password-byadmin",
    passwordData
  );
  return response.data;
};

const getUserById = async (userId: number) => {
  const response = await api.get(`/api/users/${userId}`);
  return response.data;
};

const getAllUserRoles = async () => {
  const response = await api.get("/api/users/Role");
  return response.data;
};

const getAllDeletedUsers = async () => {
  const response = await api.get("/api/users/get-all-deleted-user");
  return response.data;
};

const getDeletedUserById = async (userId: number) => {
  const response = await api.get(`/api/users/get-deleted-user-byid/${userId}`);
  return response.data;
};

// Exporting hoooks
export const useGetAllUsers = () => {
  return useQuery("allUsers", getAllUsers);
};

export const useAddImageToUser = () => {
  return useMutation(addImageToUser);
};

export const useDeleteUserById = () => {
  return useMutation(deleteUserById);
};

export const useChangePassword = () => {
  return useMutation(changePassword);
};

export const useUpdateUser = () => {
  return useMutation(updateUser);
};

export const useChangeRoleOfUser = () => {
  return useMutation(changeRoleOfUser);
};

export const useChangePasswordByAdmin = () => {
  return useMutation(changePasswordByAdmin);
};

export const useGetUserById = (userId: number) => {
  return useQuery(["userById", userId], () => getUserById(userId));
};

export const useGetAllUserRoles = () => {
  return useQuery("allUserRoles", getAllUserRoles);
};

export const useGetAllDeletedUsers = () => {
  return useQuery("allDeletedUsers", getAllDeletedUsers);
};

export const useGetDeletedUserById = (userId: number) => {
  return useQuery(["deletedUserById", userId], () =>
    getDeletedUserById(userId)
  );
};
