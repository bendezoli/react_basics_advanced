import { useReducer } from "react";
const counterReducer = (prevState, action) => {
  console.log(prevState);
  if (action.type === "increment") {
    return {
      counter: prevState.counter + 1,
    };
  } else if (action.type === "decrement") {
    return { counter: prevState.counter - 1 };
  } else {
    return {
      counter: 0,
    };
  }
};

const Counter = () => {
  const [counterState, dispacthCounter] = useReducer(counterReducer, {
    counter: 0,
  });

  const incrementNumber = () => {
    dispacthCounter({ type: "increment" });
  };
  const derementNumber = () => {
    dispacthCounter({ type: "decrement" });
  };
  const resetNumber = () => {
    dispacthCounter({ type: "reset" });
  };

  return (
    <div className="counter">
      <pre>{JSON.stringify(counterState, null, 2)}</pre>
      <h2>The number is: {counterState.counter}</h2>
      <button onClick={incrementNumber}>Increment</button>
      <button onClick={derementNumber}>Decrement</button>
      <button onClick={resetNumber}>Reset</button>
    </div>
  );
};
export default Counter;
