import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { counterActions } from "../store/reducer/countSlice";

export default function Counter() {
  const { increase, decrease } = counterActions;
  const { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const increaseHandler = () => {
    dispatch(increase(4));
  };
  const decreaseHandler = () => {
    dispatch(decrease());
  };
  return (
    <div className="bg-secondary p-5 text-light">
      <h2>Hello Counter Compoent</h2>

      <p className="lead fs-3">Count is : {count}</p>
      <button className="btn btn-warning mx-3" onClick={increaseHandler}>
        +
      </button>
      <button className="btn btn-danger mx-3" onClick={decreaseHandler}>
        -
      </button>
    </div>
  );
}
