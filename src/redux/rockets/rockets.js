import axios from 'axios';

const InitialState = [];
const FETCH_ROCKETS = 'FetchRockets';

const baseUrl = 'https://api.spacexdata.com/v3/rockets';

export const fetchRockets = () => async (dispatch) => {
  const rockets = await axios.get(baseUrl);
  const mappedRockets = rockets.data.map((rocket) => ({
    id: rocket.rocket_id,
    name: rocket.rocket_name,
    type: rocket.rocket_type,
    images: rocket.flickr_images[0],
  }));
};

const rocketReducer = (state = InitialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default rocketReducer;
