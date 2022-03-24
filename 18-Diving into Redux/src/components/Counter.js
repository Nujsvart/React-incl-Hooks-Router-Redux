import { useSelector, useDispatch } from "react-redux";
import {
  increaseCounter,
  decreaseCounter,
} from "../store/actions/counterActions";
import { toggleCounter } from "../store/actions/toggleActions";

import classes from "./Counter.module.css";

const Counter = () => {
  const counter = useSelector(state => state.counter);
  const toggle = useSelector(state => state.toggle);
  const dispatch = useDispatch();

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {toggle && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={() => dispatch(increaseCounter())}>Increment</button>
        <button onClick={() => dispatch(decreaseCounter())}>Decrement</button>
      </div>

      <button onClick={() => dispatch(toggleCounter())}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
