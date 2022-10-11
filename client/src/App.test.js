import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import App from './App';
import Menu from './components/Menu';

test('renders the main page', () => {
  render(<App />, { wrapper: MemoryRouter });
  expect(screen.getByText("Where's Waldo?")).toBeInTheDocument();
});

test('renders the thumbnails', () => {
  render(<Menu />, { wrapper: MemoryRouter });
  const easy = screen.getByAltText('Track');
  const medium = screen.getByAltText('Beach');
  const hard = screen.getByAltText('Fruitland');
  expect(easy).toBeInTheDocument();
  expect(medium).toBeInTheDocument();
  expect(hard).toBeInTheDocument();
});

test('links to images are correct', () => {
  render(<Menu />, { wrapper: MemoryRouter });
  const linkEasy = screen.getByRole('link', { name: 'Easy Track'});
  const linkMedium = screen.getByRole('link', { name: 'Medium Beach'});
  const linkHard = screen.getByRole('link', { name: 'Hard Fruitland'});
  expect(linkEasy).toHaveAttribute('href', '/game/track');
  expect(linkMedium).toHaveAttribute('href', '/game/beach');
  expect(linkHard).toHaveAttribute('href', '/game/fruit');
});