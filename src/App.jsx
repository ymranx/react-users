import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import * as actions from "./states/actions";

const App = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter);

  const onBtnClick = () => {
    dispatch(actions.increment(2));
  }
  const onBtnClick2 = () => {
    dispatch(actions.decrement(1));
  }
  return(
    <div className="container p-3 mx-auto flex flex-col">
    HI {counter}
    <button onClick={onBtnClick}>Increase</button>
    <button onClick={onBtnClick2}>Decrease</button>
  </div>
  );

}

export default App
