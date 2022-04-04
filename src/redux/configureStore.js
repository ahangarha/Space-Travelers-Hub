import { applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import MissionsReducer from './missions/missions';

const rootReducer = combineReducers({
  missions: MissionsReducer,
});

const store = createStore(
  rootReducer,
  applyMiddleware([
    logger,
    thunk,
  ]),
);

export default store;
