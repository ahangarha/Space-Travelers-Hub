import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import Rockets from '../Rockets';
import store from '../../redux/configureStore';

const LocalRocket = () => (
  <Provider store={store}>
    <Rockets />
  </Provider>
);

it('Testing if rockets are rendered on the page', async () => {
  await render(<LocalRocket />);
  const text = screen.getByRole('heading', { name: 'Elon-Musk' });
  expect(text).toBeVisible();
});
