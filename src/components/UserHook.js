import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getUsers, addUser, updateUser, deleteUser } from "../httpRequests";
import {
  userFetched,
  userAdded,
  userUpdated,
  userDeleted,
} from "../states/actions";
import { NEWUSER_PAGE, EDITUSER_PAGE, HOME_PAGE } from "../constants";

const useUserHook = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const userList = useSelector((state) => state.users);

  const fetchUsers = () => {
    getUsers()
      .then((res) => res.data)
      .then(({ data }) => {
        dispatch(userFetched(data));
      });
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
  const handleSubmitNewUser = (userData) => (ev) => {
    addUser(userData)
      .then((res) => res.data)
      .then((data) => {
        dispatch(userAdded(data));
        history.push(HOME_PAGE);
      });
  };
  const handleSubmitEditUser = (userData) => (ev) => {
    updateUser(userData, userData.id)
      .then((res) => res.data)
      .then((data) => {
        dispatch(userUpdated(data));
        history.push(HOME_PAGE);
      });
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
