import React from "react";

const Form = (props) => {
  const { mode } = props;
  return (
    <div className="flex flex-col">
      <h2 className="text-xl font-semibold mb-2">
        {mode === "edit" ? "Edit User" : "Add User"}
      </h2>

      <label for="first_name">Name</label>
      <input
        type="text"
        className="p-1 border-gray-200 border-2"
        name="first_name"
        id="first_name"
      />
      <label for="user_name">Username</label>
      <input
        type="text"
        className="p-1 border-gray-200 border-2"
        name="user_name"
        id="user_name"
      />
      <label for="email">Email</label>
      <input
        type="text"
        className="p-1 border-gray-200 border-2"
        name="email"
        id="email"
      />
      <label for="phone">Phone</label>
      <input
        type="text"
        className="p-1 border-gray-200 border-2"
        name="phone"
        id="phone"
      />
      <div className="my-2 flex justify-end">
        <button className="bg-black text-white px-5 py-1 rounded-sm">
          Submit
        </button>
      </div>
    </div>
  );
};
export default Form;
