import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import Missions from '../pages/Missions';

global.fetch = () => Promise.resolve({
  json: () => Promise.resolve([{
    mission_id: '1',
    mission_name: 'some name',
    description: 'some description',
  }]),
});

const LocalMissions = () => (
  <Provider store={store}>
    <Missions />
  </Provider>
);

describe('Mission Page', () => {
  it('gets rendered', () => {
    render(<LocalMissions />);
    const element = screen.getByRole('heading', { name: 'Missions' });
    expect(element).toBeVisible();
  });
});
