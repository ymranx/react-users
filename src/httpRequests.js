import axios from "axios";
import { apiLocation } from "./constants";

export const loginUser = (email, password) => {
  return axios.post(`${apiLocation.BASE_URL}${apiLocation.LOGIN}`, {
    email,
    password,
  });
};
export const getUsers = () => {
  return axios.get(`${apiLocation.BASE_URL}${apiLocation.USERS}`);
};

export const addUser = (userData) => {
  return axios.post(`${apiLocation.BASE_URL}${apiLocation.USERS}`, userData);
};

export const updateUser = (userData, id) => {
  return axios.put(
    `${apiLocation.BASE_URL}${apiLocation.USERS}/${id}`,
    userData
  );
};

export const deleteUser = (id) => {
  return axios.delete(`${apiLocation.BASE_URL}${apiLocation.USERS}/${id}`);
};
