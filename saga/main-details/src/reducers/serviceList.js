import {
  FETCH_SERVICES_REQUEST,
  FETCH_SERVICES_SUCCESS,
  FETCH_SERVICES_FAILURE,
} from '../actions/actionTypes';

const initialState = {
  services: [],
  loading: false,
  error: null,
};

export function serviceListReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_SERVICES_REQUEST:
      return { ...state, services: [], loading: true, error: null };
    case FETCH_SERVICES_SUCCESS:
      const { services } = action.payload;
      return { ...state, services, loading: false, error: null };
    case FETCH_SERVICES_FAILURE:
      const { error } = action.payload;
      return { ...state, services: [], loading: false, error };
    default:
      return state;
  }
}
