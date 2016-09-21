import {ACTION_TYPES} from "./actions";

const INITIAL_STATE = {
  countries:false
};

const reducers = {};

reducers[ACTION_TYPES.COUNTRIES_RECEIVED] = (state,action) => {
  return Object.assign({},state,{countries:action.payload});
};

export default (state = INITIAL_STATE, action = {}) => {
  let reducer = reducers[action.type];
  return reducer ? reducer(state, action) : state;
};
