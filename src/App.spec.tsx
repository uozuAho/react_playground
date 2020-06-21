import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import App from './App';

test('loads and displays greeting', async () => {
  render(<App />);

  fireEvent.click(screen.getByText('Lifecycle demos'));

  await waitFor(() => screen.getByRole('heading'));

  expect(screen.getByRole('heading')).toHaveTextContent('LifecycleDemos');
});
