import { GET_ERRORS } from "../actions/types";

const initialState = {
  error: ''
};

const errorReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ERRORS:
      return {
        error: action.payload
      };
    default:
      return state;
  }
};

export { errorReducer };
