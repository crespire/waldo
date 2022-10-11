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