import { useState } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const addCount = () => {
    if (count < 20) setCount(count + 1);
  };

  const subCount = () => {
    if (count > 0) setCount(count - 1);
  };

  return (
    <>
      <h1>Counter</h1>
      <h2>Count : {count}</h2>
      <button onClick={addCount}>Add + </button> &nbsp;
      <button onClick={subCount}>Sub - </button>
    </>
  );
}

export default App;
