import { applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import MissionsReducer from './missions/missions';
import rocketReducer from './rockets/rockets';

const rootReducer = combineReducers({
  missions: MissionsReducer,
  rockets: rocketReducer,
});

const store = createStore(
  rootReducer,
  applyMiddleware(
    logger,
    thunk,
  ),
);

export default store;
