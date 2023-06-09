import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { combineEpics, createEpicMiddleware } from 'redux-observable';
import { serviceItemReducer } from '../reducers/serviceItem';
import { serviceListReducer } from '../reducers/serviceList';
import { fetchServicesEpic, fetchItemEpic } from '../epics';

const reducer = combineReducers({
  serviceList: serviceListReducer,
  serviceItem: serviceItemReducer,
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const epic = combineEpics(fetchServicesEpic, fetchItemEpic);
const epicMiddleware = createEpicMiddleware();
const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(epicMiddleware))
);

epicMiddleware.run(epic);
export default store;
