import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import App from '../App';

test('renders the 4 character portraits', () => {
  const route = '/game/track';

  render(
    <MemoryRouter initialEntries={[route]}>
      <App />
    </MemoryRouter>
  );

  const portraits = screen.queryAllByRole('img');
  expect(portraits.length).toBe(4);
});

// https://testing-library.com/docs/example-react-router/
// Seems like the portraits are not rendering at all, main is empty.