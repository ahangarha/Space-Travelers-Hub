const FETCH_MISSIONS_SUCCESS = 'spaceTraveler/missions/FETCH_MISSIONS_SUCCESS';

export const fetchMissionsSuccess = (missions) => ({
  type: FETCH_MISSIONS_SUCCESS,
  payload: {
    missions,
  },
});

export const fetchMissions = () => (dispatch) => {
  const API_URL = 'https://api.spacexdata.com/v3/missions';
  fetch(API_URL)
    .then((res) => res.json())
    .then((res) => {
      const missions = res.map((r) => ({
        id: r.mission_id,
        name: r.mission_name,
        description: r.description,
        joined: false,
      }));
      dispatch(fetchMissionsSuccess(missions));
    });
};

export default function reducer(state = [], action) {
  switch (action.type) {
    case FETCH_MISSIONS_SUCCESS:
      return [...state, ...action.payload.missions];
    default:
      return state;
  }
}
