import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Form from "./Form";
import useUserHook from "./UserHook";

const EditUser = () => {
  const { handleSubmitEditUser, getUserFromState } = useUserHook();
  const { id } = useParams();

  //   useEffect(() => {
  //     currentUser = getUserFromState(id);
  //   }, [id]);

  return (
    <div className="flex w-full flex-col mx-auto max-w-screen-sm">
      <Form
        mode="edit"
        currentUser={getUserFromState(id)}
        handleSubmitUser={handleSubmitEditUser}
      />
    </div>
  );
};
export default EditUser;
