import {
  FETCH_ITEM_REQUEST,
  FETCH_ITEM_SUCCESS,
  FETCH_ITEM_FAILURE,
} from '../actions/actionTypes';

const initialState = {
  item: {
    id: '',
    name: '',
    price: '',
    content: '',
  },
  loading: false,
  error: null,
};

export function serviceItemReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_ITEM_REQUEST:
      return { ...state, loading: true, error: null };
    case FETCH_ITEM_SUCCESS:
      const { item } = action.payload;
      return { ...state, item, loading: false, error: null };
    case FETCH_ITEM_FAILURE:
      const { error } = action.payload;
      return { ...state, loading: false, error };
    default:
      return state;
  }
}
