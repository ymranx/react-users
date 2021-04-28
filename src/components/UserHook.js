import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { addUser, updateUser, deleteUser } from "../httpRequests";
import {
  userFetchAsync,
  userAdded,
  userUpdated,
  userDeleted,
} from "../states/actions";
import { NEWUSER_PAGE, EDITUSER_PAGE, HOME_PAGE } from "../constants";
import { validateEmptyFields } from "../utils";

const useUserHook = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const userList = useSelector((state) => state.users);

  const fetchUsers = () => {
    dispatch(userFetchAsync());
  };
  const getUserFromState = (userId) => {
    const user = userList.filter((usr) => usr.id == userId);
    return user.length > 0 ? user[0] : {};
  };
  const handleNewUser = (ev) => {
    history.push(NEWUSER_PAGE);
  };
  const handleEditUser = (userId) => (ev) => {
    history.push(`${EDITUSER_PAGE}${userId}`);
  };

  const readUserInput = (userData, setUserdata, field) => (ev) => {
    setUserdata({ ...userData, [field]: ev.target.value });
  };
  const readSearchInput = (setSearchkeyword) => (ev) => {
    setSearchkeyword(ev.target.value);
  };
  const handleSubmitNewUser = (userData) => () => {
    const { first_name, last_name, email } = userData;
    if (validateEmptyFields(first_name, last_name, email)) {
      addUser(userData)
        .then((res) => res.data)
        .then((data) => {
          dispatch(userAdded(data));
          history.push(HOME_PAGE);
        });
    }
  };
  const handleSubmitEditUser = (userData) => () => {
    const { first_name, last_name, email } = userData;
    if (validateEmptyFields(first_name, last_name, email)) {
      updateUser(userData, userData.id)
        .then((res) => res.data)
        .then((data) => {
          dispatch(userUpdated(data));
          history.push(HOME_PAGE);
        });
    }
  };
  const handleSubmitDelUser = (userId) => (ev) => {
    const confirmDelete = confirm(`Confirm delete user: ${userId}?`);
    if (confirmDelete) {
      deleteUser(userId).then((_) => {
        dispatch(userDeleted(userId));
      });
    }
  };
  return {
    fetchUsers,
    handleNewUser,
    handleEditUser,
    readUserInput,
    readSearchInput,
    handleSubmitNewUser,
    handleSubmitEditUser,
    handleSubmitDelUser,
    getUserFromState,
  };
};
export default useUserHook;
