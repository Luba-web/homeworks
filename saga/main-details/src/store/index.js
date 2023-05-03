import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { serviceItemReducer } from '../reducers/serviceItem';
import { serviceListReducer } from '../reducers/serviceList';
import { createSagaMiddleware } from 'redux-saga';
import saga from '../sagas';

const reducer = combineReducers({
  serviceList: serviceListReducer,
  serviceItem: serviceItemReducer,
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(saga);
export default store;
