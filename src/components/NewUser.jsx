import React from "react";
import Form from "./Form";
import useUserHook from "./UserHook";

const NewUser = () => {
  const { handleSubmitNewUser } = useUserHook();
  const currentUser = {
    first_name: "",
    last_name: "",
    email: "",
  };

  return (
    <div className="flex w-full flex-col mx-auto max-w-screen-sm">
      <Form currentUser={currentUser} handleSubmitUser={handleSubmitNewUser} />
    </div>
  );
};
export default NewUser;
