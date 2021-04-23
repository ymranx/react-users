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
