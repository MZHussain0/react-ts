import React, { ReactNode } from "react";

type CounterPrpps = {
  setCount: React.Dispatch<React.SetStateAction<number>>;
  children: ReactNode;
};

const Counter = ({ setCount, children }: CounterPrpps) => {
  return (
    <div>
      <h1>{children}</h1>
      <button onClick={() => setCount((prev) => prev + 1)}> + </button>
      <button onClick={() => setCount((prev) => prev - 1)}> - </button>
    </div>
  );
};

export default Counter;
