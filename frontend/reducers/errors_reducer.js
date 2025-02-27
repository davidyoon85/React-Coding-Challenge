import { RECEIVE_CAT_ERRORS } from "../actions/cats_actions";

export default (state = [], action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_CAT_ERRORS:
      return action.errors;
    default:
      return state;
  }
};
