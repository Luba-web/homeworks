import { createStore, combineReducers } from 'redux';
import serviceListReducer from './reducers/ServiceList';
import serviceAddReducer from './reducers/ServiceAdd';

const reducer = combineReducers({
  serviceList: serviceListReducer,
  serviceAdd: serviceAddReducer,
});

const store = createStore(reducer);

export default store;
