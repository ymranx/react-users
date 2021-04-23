import * as actionTypes from "./actionTypes";

const reducer = (state = { counter: 0 }, action) => {
  switch (action.type) {
    case actionTypes.Increment:
      return { ...state, counter: state.counter + action.payload.value };
      break;
    case actionTypes.Decrement:
      return { ...state, counter: state.counter - action.payload.value };
      break;
    default:
      return state;
  }
};
export default reducer;
