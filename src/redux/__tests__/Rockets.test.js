import rocketReducer, { fetchRockets } from '../rockets/rockets';

describe('Test reducer and actions', () => {
  it('Returns initial state with no action', () => {
    expect(rocketReducer(undefined, {})).toEqual([]);
  });

  it('Updates state correctly based on the given rocket', () => {
    const rockets = [{
      id: '1',
      name: 'some name',
    }];

    expect(rocketReducer([], fetchRockets(rockets))).toEqual(rockets);
  });
});
