import * as actionTypes from "./actionTypes";

export function increment(value) {
  return {
    type: actionTypes.Increment,
    payload: {
      value,
    },
  };
}
export function decrement(value) {
  return {
    type: actionTypes.Decrement,
    payload: {
      value,
    },
  };
}

export function userFetched(data) {
  return {
    type: actionTypes.USER_FETCHED,
    payload: {
      users: data,
    },
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
