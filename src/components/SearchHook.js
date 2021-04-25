import { useSelector } from "react-redux";

const useSearchHook = (keyword) => {
  const users = useSelector((state) => state.users);

  return users.filter((user) => user.first_name.indexOf(keyword) >= 0);
};

export default useSearchHook;
