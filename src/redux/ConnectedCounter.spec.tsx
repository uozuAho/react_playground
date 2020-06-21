import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createCounterStore } from './CounterStore';
import { ConnectedCounter } from './ConnectedCounter';

describe('ConnectedCounter', () => {
  beforeEach(() => {
    const store = createCounterStore();

    render(
      <Provider store={store}>
        <ConnectedCounter />
      </Provider>
    );
  });

  test('starts at zero', () => {
    expect(screen.getByTestId('count-value')).toHaveTextContent('0');
  });

  test('increments', async () => {
    fireEvent.click(screen.getByText('+'));

    expect(screen.getByTestId('count-value')).toHaveTextContent('1');
  });

  test('decrements', async () => {
    fireEvent.click(screen.getByText('-'));

    expect(screen.getByTestId('count-value')).toHaveTextContent('-1');
  });
});
