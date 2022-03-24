import { useSelector, useDispatch } from "react-redux";
import {
  increaseCounter,
  decreaseCounter,
} from "../store/actions/counterActions";

import classes from "./Counter.module.css";

const Counter = () => {
  const counter = useSelector(state => state.counter);
  const dispatch = useDispatch();
  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={() => dispatch(increaseCounter())}>Increment</button>
        <button onClick={() => dispatch(decreaseCounter())}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
