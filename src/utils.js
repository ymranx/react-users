import { LOGIN_TOKEN } from "./constants";

const setItemToLocalStorage = (key, value) => {
  localStorage.setItem(key, value);
};

const getItemFromLocalStorage = (key) => {
  return localStorage.getItem(key);
};

const isLoggedIn = () => {
  const token = getItemFromLocalStorage(LOGIN_TOKEN);
  return token ? true : false;
};

const saveToken = (token) => {
  setItemToLocalStorage(LOGIN_TOKEN, token);
};

export {
  setItemToLocalStorage,
  getItemFromLocalStorage,
  isLoggedIn,
  saveToken,
};
