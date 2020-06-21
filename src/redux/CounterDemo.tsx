import React from "react";
import { Provider } from "react-redux";
import { createCounterStore } from "./CounterStore";
import { ConnectedCounter } from "./ConnectedCounter";

export function CounterDemo() {
  return (
    <Provider store={createCounterStore()}>
      <h1>Counter redux demo</h1>
      <p>Here's a counter connected to a redux store.</p>
      <ConnectedCounter />
    </Provider>
  );
}
