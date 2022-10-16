import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { RouterProvider, createMemoryRouter } from 'react-router-dom';
import App from '../App';
import Menu from './Menu';
import Game from './Game';
import ImageArea from './ImageArea';

const appRoutes = [{
  path: '/',
  element: <App />,
  children: [
    {
      index: true,
      element: <Menu />,
    },
    {
      path: '/game/:image',
      element: <Game />,
    },
  ]
}];

global.fetch = jest.fn(() => 
  Promise.resolve({
    json: () => Promise.resolve({ "found": true, "coords": [213, 156], "name": "waldo" })
  })
);

test('renders the correct page', async () => {
  const path = ['/game/track'];
  const router = createMemoryRouter(appRoutes, {
    initialEntries: path,
  });

  render(
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  );
  
  expect(screen.getByText(/playing Track/i)).toBeInTheDocument();
});

test('fires click event when canvas is clicked on', async () => {
  const user = userEvent.setup();

  await user.click(screen.getByTestId('canvas'));

  expect(fetch).toHaveBeenCalled();
})

/*
  https://jestjs.io/docs/next/jest-object#jestspyonobject-methodname
  https://www.leighhalliday.com/mock-fetch-jest

  So, we're trying to integration test with Jest.
  I think we have to first mock the fetch function so that we can provide a return
  value that we can count on/set up to confirm tests.

  I also think we need to spy on the canvas in order to listen for the draws in
  the case of a successful click.

  I also wonder if we can spy on the ImageArea handleClick() just to confirm it
  is being clicked.

  This mocking/setting up canvas has been so intensely draining.
*/