import { render, screen } from '@testing-library/react';
import App from './App';

import { getBusinessByUserId } from './data/api';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

test('getBusinessByUserId', () => {
  const result = getBusinessByUserId('cadc7a4a-e6b6-4174-9d70-13571fa2d16d');
  expect(typeof result).toEqual(typeof Object());
});

