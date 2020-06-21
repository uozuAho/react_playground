import React from 'react';

interface CounterProps {
  count: number;
  increment: () => void;
  decrement: () => void;
};

export const Counter = (props: CounterProps) => {
  return (
    <div>
      <h2>Counter</h2>
      <div>
        <button onClick={props.decrement}>-</button>
        <span data-testid="count-value">{props.count}</span>
        <button onClick={props.increment}>+</button>
      </div>
    </div>
  );
};
