import {ACTION_TYPES} from "./Actions";

const initialState = {};
const reducers = {};

reducers[ACTION_TYPES.DUMMY] = (state) => {
  alert("[checkout] not yet implemented");
  return state;
};

export default (state = initialState, action = {}) => {
  let reducer = reducers[action.type];
  return reducer ? reducer(state, action) : state;
};
