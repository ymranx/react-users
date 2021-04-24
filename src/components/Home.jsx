import React from "react";

const Home = () => {
  return (
    <div className="flex w-full flex-col max-w-screen-lg mx-auto">
      <h2 className="text-xl font-semibold my-5">My Customers</h2>
      <input
        className="p-1 border-gray-200 border-2"
        type="text"
        placeholder="Search users"
      />
      <div className="my-2 flex justify-end">
        <button className="bg-black text-white px-5 py-1 rounded-sm">
          Add User
        </button>
      </div>

      <table class="table-fixed">
        <thead className="bg-gray-200">
          <tr className="h-12">
            <th className="w-1/6">Name</th>
            <th className="w-1/6">Username</th>
            <th className="w-1/6">Email</th>
            <th className="w-1/6">Phone</th>
            <th className="w-1/6">Created Date</th>
            <th className="w-1/6">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr class="bg-emerald-200 border-gray-200 border-b h-10">
            <td>dfsd</td>
            <td>Adam</td>
            <td>112</td>
            <td>dfsd</td>
            <td>Adam</td>
            <td>112</td>
          </tr>
          <tr class="bg-emerald-200 border-gray-200 border-b h-10">
            <td>dfsd</td>
            <td>Adam</td>
            <td>112</td>
            <td>dfsd</td>
            <td>Adam</td>
            <td>112</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default Home;
