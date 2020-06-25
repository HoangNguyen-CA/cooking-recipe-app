import { SET_ERROR, HIDE_ERROR } from '../actions/actionTypes';

import { updateObject } from '../../shared/util';

const initialState = {
  error: '',
  show: false,
};

export default function (state = initialState, action) {
  const payload = action.payload;

  switch (action.type) {
    case SET_ERROR: {
      return updateObject(state, { error: payload.error, show: true });
    }
    case HIDE_ERROR: {
      return updateObject(state, { error: '', show: false });
    }

    default:
      return state;
  }
}
