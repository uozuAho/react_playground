import { createStore } from "redux";

const initialState = {
  count: 0,
};

interface Action {
  type: string;
}

function reducer(state = initialState, action: Action): StoreState {
  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count + 1,
      };
    case 'DECREMENT':
      return {
        count: state.count - 1,
      };
    default:
      return state;
  }
}

export interface StoreState {
  count: number;
}

export function increment(): Action {
  return { type: 'INCREMENT' };
}

export function decrement(): Action {
  return { type: 'DECREMENT' };
}

export function createCounterStore() {
  return createStore(reducer, initialState);
}
