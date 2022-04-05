import reducer, { fetchMissionsSuccess } from '../missions/missions';

describe('Test reducer and actions', () => {
  it('Reutrns initial state with no action', () => {
    expect(reducer(undefined, {})).toEqual([]);
  });

  it('Updates state correctly based on the given mission', () => {
    const missions = [{
      id: '1',
      name: 'some name',
    }];

    expect(reducer([], fetchMissionsSuccess(missions))).toEqual(missions);
  });
});
