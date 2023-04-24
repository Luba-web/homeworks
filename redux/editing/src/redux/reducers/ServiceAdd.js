import { CHANGE_SERVICE_FIELD, RESET_SERVICE } from '../actionTypes';

const initialState = { name: '', price: '' };

export default function serviceAddReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_SERVICE_FIELD:
      const { name, value } = action.payload;
      return { ...state, [name]: value };
    case RESET_SERVICE:
      return { ...initialState };
    default:
      return state;
  }
}
