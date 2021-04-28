import * as actionTypes from "./actionTypes";

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.USER_FETCHED:
      return { ...state, users: action.payload.users };
    case actionTypes.USER_ADDED:
      return { ...state, users: [...state.users, action.payload.user] };
    case actionTypes.USER_UPDATED: {
      const id = action.payload.id;
      const userIndex = state.users.findIndex((user) => user.id == id);
      const updatedUsers = [
        ...state.users.slice(0, userIndex),
        action.payload.user,
        ...state.users.slice(userIndex + 1),
      ];
      return { ...state, users: updatedUsers };
    }
    case actionTypes.USER_DELETED:
      const id = action.payload.id;
      const userIndex = state.users.findIndex((user) => user.id == id);
      const updatedUsers = [
        ...state.users.slice(0, userIndex),
        ...state.users.slice(userIndex + 1),
      ];
      return { ...state, users: updatedUsers };
    default:
      return state;
  }
};
export default reducer;
