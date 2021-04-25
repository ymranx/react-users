import { useState } from "react";
import { useHistory } from "react-router-dom";
import { isLoggedIn, saveToken } from "../utils";
import { LOGIN_PAGE, HOME_PAGE } from "../constants";
import { loginUser } from "../httpRequests";

const useLoginHook = () => {
  const [email, setEmail] = useState("eve.holt@reqres.in");
  const [password, setPassword] = useState("cityslicka");
  const history = useHistory();

  const checkLogin = () => {
    if (!isLoggedIn()) {
      history.push(LOGIN_PAGE);
    } else {
      return true;
    }
  };
  const readEmail = (ev) => {
    setEmail(ev.target.value);
  };
  const readPassword = (ev) => {
    setPassword(ev.target.value);
  };
  const performLogin = () => {
    loginUser(email, password)
      .then(({ data }) => {
        saveToken(data.token);
        history.push(HOME_PAGE);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return {
    checkLogin,
    performLogin,
    readEmail,
    email,
    password,
    readPassword,
  };
};
export default useLoginHook;
