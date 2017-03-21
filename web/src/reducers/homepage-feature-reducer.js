import * as types from '../actions/action-types';

const defaultState = {
	isFetching: false,
	list: [],
};

export default (state = defaultState, action) => {
  switch(action.type) {
  	case types.REQUEST_ALL_HP_FEATURES:
  		return Object.assign({}, state, {
  			isFetching: true,
  		});
    case types.RECIEVE_ALL_HP_FEATURES:
      return Object.assign({}, state, {
      	list: action.features,
      	isFetching: false,
      });
    default:
    	return state;
  }
}