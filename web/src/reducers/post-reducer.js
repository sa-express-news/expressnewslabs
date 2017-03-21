import * as types from '../actions/action-types';

const defaultState = {
	isFetching: false,
	list: [],
};

export default (state = defaultState, action) => {
  switch(action.type) {
  	case types.REQUEST_ALL_POSTS:
  		return Object.assign({}, state, {
  			isFetching: true,
  		});
    case types.RECIEVE_ALL_POSTS:
      return Object.assign({}, state, {
      	list: action.posts,
      	isFetching: false,
      });
    default:
    	return state;
  }
}