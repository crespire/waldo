import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { RouterProvider, createMemoryRouter, MemoryRouter } from 'react-router-dom';
import App from '../App';
import Menu from './Menu';
import Game from './Game';

const router = createMemoryRouter([
  {
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
  }
])

test('renders the correct page', async () => {
  render(
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  );
  await userEvent.click(screen.getByRole('link', { name: 'Easy Track' }));

  
  expect(screen.getByText(/playing Track/i)).toBeInTheDocument();
});

// https://testing-library.com/docs/example-react-router/
/*
  Seems like the portraits are not rendering at all.
  There's a ton of friction with testing when using outlets
  I am not sure still how to accurately load the right pages
  via router to test.

  I think, actually, the specs should be after the Images rather
  than based on the components.

  I just have to write system/e2e tests here, so I'm not too
  concerned about sticking with strict unit tests.

  Check the Javascript testing channel to see if others have solved
  this problem. I just need to figure out how to load routes with
  all the props and state I expect.
*/