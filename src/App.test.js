import { render, screen } from '@testing-library/react';
import App from './App';

import { getBusinessByUserId } from './data/api';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

// tests  that we write
//1
test('getBusinessByUserId-check the typeof the answer',async () => {
  const result =await getBusinessByUserId('fb590aef-b2e0-4354-9feb-425b279dbcfb');
  expect(typeof result).toEqual(typeof Object());
});
//2
test('getBusinessByUserId-check if the answer is correct', async () => {
  const data = await getBusinessByUserId('fb590aef-b2e0-4354-9feb-425b279dbcfb');
  console.log(data);
  expect(data.phone).toEqual("089791234")
});

