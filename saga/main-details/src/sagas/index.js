import { takeLatest, put, spawn, retry } from 'redux-saga/effects';
import {
  FETCH_SERVICES_REQUEST,
  FETCH_ITEM_REQUEST,
} from '../actions/actionTypes';
import {
  fetchServicesSuccess,
  fetchServicesFailure,
  fetchItemSuccess,
  fetchItemFailure,
} from '../actions/actionCreators';

const fetchItem = async (id) => {
  const response = await fetch(`${process.env.REACT_APP_API_URL}/${id}`);
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return await response.json();
};

const fetchServices = async (id) => {
  const response = await fetch(`${process.env.REACT_APP_API_URL}`);
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return await response.json();
};

// watcher
function* watchFetchServicesSaga() {
  yield takeLatest(FETCH_SERVICES_REQUEST, handleFetchServicesSaga);
}

// worker
function* handleFetchServicesSaga(action) {
  try {
    const retryCount = 2;
    const retryDelay = 1 * 1000; // ms
    const data = yield retry(retryCount, retryDelay, fetchServices);
    yield put(fetchServicesSuccess(data));
  } catch (e) {
    yield put(fetchServicesFailure(e));
  }
}

// watcher
function* watchFetchServiceSaga() {
  yield takeLatest(FETCH_ITEM_REQUEST, handleFetchServiceSaga);
}

// worker
function* handleFetchServiceSaga(action) {
  try {
    const retryCount = 2;
    const retryDelay = 1 * 1000; // ms
    const data = yield retry(retryCount, retryDelay, fetchItem, action.payload);
    yield put(fetchItemSuccess(data));
  } catch (e) {
    yield put(fetchItemFailure(action.payload, e));
  }
}

export default function* saga() {
  yield spawn(watchFetchServicesSaga);
  yield spawn(watchFetchServiceSaga);
}
