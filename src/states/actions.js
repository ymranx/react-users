import * as actionTypes from "./actionTypes";
import { getUsers } from "../httpRequests";

export function userFetched(data) {
  return {
    type: actionTypes.USER_FETCHED,
    payload: {
      users: data,
    },
  };
}
// thunk
export function userFetchAsync() {
  return (dispatch) => {
    getUsers()
      .then((res) => res.data)
      .then(({ data }) => {
        dispatch(userFetched(data));
      });
  };
}
export function userAdded(data) {
  return {
    type: actionTypes.USER_ADDED,
    payload: {
      user: data,
    },
  };
}

export function userUpdated(data) {
  return {
    type: actionTypes.USER_UPDATED,
    payload: {
      id: data.id,
      user: data,
    },
  };
}
export function userDeleted(id) {
  return {
    type: actionTypes.USER_DELETED,
    payload: {
      id,
    },
  };
}
