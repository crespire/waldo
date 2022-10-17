import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { RouterProvider, createMemoryRouter } from 'react-router-dom';
import App from '../App';
import Menu from '../components/Menu';
import Game from '../components/Game';

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

describe('For a game with the Track Image Loaded', () => {
  beforeEach(() => {
    global.fetch = () => {
      Promise.resolve({
        json: () => Promise.resolve({ "found": true, "coords": [213, 834], "name": "waldo" })
      })
    }
  })

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
  
  test.skip('fires click event when canvas is clicked on', async () => {
    const user = userEvent.setup();  
    await user.click(screen.getByTestId('canvas'));
    expect(fetch).toHaveBeenCalled();
  })

  afterEach(() => {
    jest.restoreAllMocks();
  });  
});


/*
  https://jestjs.io/docs/next/jest-object#jestspyonobject-methodname
  https://www.leighhalliday.com/mock-fetch-jest

  I think the problem is that we're using jsdom in a Node environment, and I'm trying
  to E2E test assuming a browser based environment.

  ie, I need to find the JS equivalent of Capybara. I think I'm going to move on to
  writing the API and come back to e2e testing later.

  My canvas element is not being clicked, and I think it's because it isn't an element
  is supported in jsdom. I installed the canvas package, but 
*/