import React, { useEffect, useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    if (count > 0) {
      setCount(count - 1);
    }
  }
  useEffect(() => {
    if (count === 3) {
      alert("Hello");
    }
  }, [count]);
  return (
    <>
      <h1>{count}</h1>
      <button
        onClick={() => {
          increment();
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          decrement();
        }}
      >
        -
      </button>
    </>
  );
}
export { App };
