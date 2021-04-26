import { useSelector } from "react-redux";

const useSearchHook = (keyword) => {
  const users = useSelector((state) => state.users);
  const keywordLower = keyword.toLocaleLowerCase();

  const filterFn = (field) => {
    return field.toLocaleLowerCase().indexOf(keywordLower) >= 0;
  };
  return users.filter(
    ({ first_name, last_name, email }) =>
      filterFn(first_name) || filterFn(last_name) || filterFn(email)
  );
};

export default useSearchHook;
