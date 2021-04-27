import React, { useEffect, useState } from "react";
import useLoginHook from "./LoginHook";
import useUserHook from "./UserHook";
import useSearchHook from "./SearchHook";

const Home = () => {
  const { checkLogin } = useLoginHook();
  const {
    fetchUsers,
    handleNewUser,
    handleEditUser,
    handleSubmitDelUser,
    readSearchInput,
  } = useUserHook();

  const [searchKeyword, setSearchkeyword] = useState("");
  const userList = useSearchHook(searchKeyword);

  useEffect(() => {
    if (checkLogin() && userList.length <= 0) {
      fetchUsers();
    }
  }, []);

  return (
    <div className="flex w-full flex-col max-w-screen-lg mx-auto">
      <h2 className="text-xl font-semibold my-5">My Customers</h2>
      <input
        className="p-1 border-gray-200 border-2"
        type="text"
        placeholder="Search users"
        onChange={readSearchInput(setSearchkeyword)}
      />
      <div className="my-2 flex justify-end">
        <button
          className="bg-black text-white px-5 py-1 rounded-sm"
          onClick={handleNewUser}
        >
          Add User
        </button>
      </div>

      <table className="table-fixed">
        <thead className="bg-gray-200">
          <tr className="h-12">
            <th className="w-1/4">First name</th>
            <th className="w-1/4">Last name</th>
            <th className="w-1/4">Email</th>
            <th className="w-1/4">Actions</th>
          </tr>
        </thead>
        <tbody>
          {userList.map(({ first_name, last_name, email, id }) => (
            <tr
              className="bg-emerald-200 border-gray-200 border-b h-10"
              key={id}
            >
              <td>{first_name}</td>
              <td>{last_name}</td>
              <td>{email}</td>
              <td className="flex justify-center">
                <button
                  className="p-2 text-blue-500"
                  onClick={handleEditUser(id)}
                >
                  Edit
                </button>
                <button
                  className="p-2 text-blue-500"
                  onClick={handleSubmitDelUser(id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default Home;
