import React, { useReducer } from "react";

// Reducer function
const counterReducer = (state, action) => {
  console.log(action.type);
  console.log(state.count);
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    case "RESET":
      return { count: 0 };
    default:
      return state;
  }
};

const Counter = () => {
  // useReducer returns the current state and a dispatch function
  const [state, dispatch] = useReducer(counterReducer, { counts: 0 });

  return (
    <div>
      <h2>With useReducer</h2>
      <p>Count: {state.counts}</p>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button>
      <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
    </div>
  );
};

export default Counter;
