import { SET_ERROR, HIDE_ERROR } from '../actions/actionTypes';

const initalState = {
  error: '',
  id: '',
  show: false,
};

export default function (state = initalState, action) {
  switch (action.type) {
    case HIDE_ERROR: {
      return {
        ...state,
        error: null,
        id: null,
        show: false,
      };
    }

    default: {
      const { error, errorId, showError } = action;

      if (error) {
        return {
          ...state,
          error: error,
          id: errorId,
          show: showError === false ? false : true,
        };
      } else {
        return state;
      }
    }
  }
}
