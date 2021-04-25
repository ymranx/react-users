import React, { useState } from "react";
import useLoginHook from "./LoginHook";

const Login = () => {
  const {
    readEmail,
    readPassword,
    performLogin,
    email,
    password,
  } = useLoginHook();
  return (
    <div className="flex w-full flex-col mx-auto max-w-screen-sm mt-20">
      <h2 className="text-xl font-semibold mb-2">Login</h2>

      <label htmlFor="email">Email</label>
      <input
        type="text"
        className="p-1 border-gray-200 border-2"
        name="email"
        id="email"
        value={email}
        onChange={readEmail}
      />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        className="p-1 border-gray-200 border-2"
        name="password"
        id="password"
        value={password}
        onChange={readPassword}
      />
      <div className="my-2 flex justify-end">
        <button
          className="bg-black text-white px-5 py-1 rounded-sm"
          onClick={performLogin}
        >
          Sign In
        </button>
      </div>
    </div>
  );
};
export default Login;
