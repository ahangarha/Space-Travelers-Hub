import rocketReducer, { fetchRockets, bookRocket } from '../rockets/rockets';

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

describe('Test if the rocket is successfully booked', () => {
  it('Test if the store is updated when a rocket is booked', () => {
    const intialstate = [
      {
        id: '1',
        name: 'rocket 1',
        type: 'rocket-1',
        images: 'rocket-imgs',
        description: 'tESTING',
      },
      {
        id: '2',
        name: 'rocket 2',
        type: 'rocket-2',
        images: 'rocket-imgs-2',
        description: 'tESTING-2',
      },
      {
        id: '3',
        name: 'rocket 3',
        type: 'rocket-3',
        images: 'rocket-imgs-3',
        description: 'tESTING-3',
      },
    ];

    const resultState = [
      {
        id: '1',
        name: 'rocket 1',
        type: 'rocket-1',
        images: 'rocket-imgs',
        description: 'tESTING',
        reserved: true,
      },
      {
        id: '2',
        name: 'rocket 2',
        type: 'rocket-2',
        images: 'rocket-imgs-2',
        description: 'tESTING-2',
      },
      {
        id: '3',
        name: 'rocket 3',
        type: 'rocket-3',
        images: 'rocket-imgs-3',
        description: 'tESTING-3',
      },

    ];
    expect(rocketReducer(intialstate, bookRocket('1'))).toEqual(resultState);
  });
});
