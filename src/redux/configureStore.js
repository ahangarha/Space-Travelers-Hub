import { combineReducers, createStore } from 'redux';
import MissionsReducer from './missions/missions';

const rootReducer = combineReducers({
  missions: MissionsReducer,
});

const store = createStore(rootReducer);

export default store;
