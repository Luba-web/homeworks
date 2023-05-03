import {
  FETCH_SERVICES_REQUEST,
  FETCH_SERVICES_SUCCESS,
  FETCH_SERVICES_FAILURE,
  FETCH_ITEM_REQUEST,
  FETCH_ITEM_SUCCESS,
  FETCH_ITEM_FAILURE,
} from './actionTypes';

export function fetchServicesRequest() {
  return { type: FETCH_SERVICES_REQUEST };
}
export function fetchServicesSuccess(services) {
  return { type: FETCH_SERVICES_SUCCESS, payload: { services } };
}
export function fetchServicesFailure(error) {
  return { type: FETCH_SERVICES_FAILURE, payload: { error } };
}

export function fetchItemRequest(id) {
  return { type: FETCH_ITEM_REQUEST, payload: { id } };
}
export function fetchItemSuccess(item) {
  return { type: FETCH_ITEM_SUCCESS, payload: { item } };
}
export function fetchItemFailure(error) {
  return { type: FETCH_ITEM_FAILURE, payload: { error } };
}
