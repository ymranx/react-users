import React, { useState } from "react";
import useUserHook from "./UserHook";

const Form = (props) => {
  const { mode, currentUser, handleSubmitUser } = props;
  const [userData, setUserdata] = useState(currentUser);
  const { readUserInput } = useUserHook();

  return (
    <div className="flex flex-col mt-10">
      <h2 className="text-xl font-semibold mb-2">
        {mode === "edit" ? "Edit User" : "Add User"}
      </h2>

      <label htmlFor="first_name">First Name</label>
      <input
        type="text"
        className="p-1 border-gray-200 border-2"
        name="first_name"
        id="first_name"
        value={userData.first_name}
        onChange={readUserInput(userData, setUserdata, "first_name")}
      />
      <label htmlFor="last_name">Last Name</label>
      <input
        type="text"
        className="p-1 border-gray-200 border-2"
        name="user_name"
        id="user_name"
        value={userData.last_name}
        onChange={readUserInput(userData, setUserdata, "last_name")}
      />
      <label htmlFor="email">Email</label>
      <input
        type="text"
        className="p-1 border-gray-200 border-2"
        name="email"
        id="email"
        value={userData.email}
        onChange={readUserInput(userData, setUserdata, "email")}
      />
      <div className="my-2 flex justify-end">
        <button
          className="bg-black text-white px-5 py-1 rounded-sm"
          onClick={handleSubmitUser(userData)}
        >
          Submit
        </button>
      </div>
    </div>
  );
};
export default Form;
