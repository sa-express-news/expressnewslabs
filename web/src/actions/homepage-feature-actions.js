import * as types from './action-types';
import * as endpoints from './endpoints';
import fetch from 'isomorphic-fetch';

const requestAllHomepageFeatures = () => {
	return {
		type: types.REQUEST_ALL_POSTS
	};
};

const recieveAllHomepageFeatures = features => {
	return {
		type: types.RECIEVE_ALL_HP_FEATURES,
		features,
	}
};

const fetchAllHomepageFeatures = () => {
	return dispatch => {
		dispatch(requestAllHomepageFeatures())
		return fetch(endpoints.GET_ALL_HP_FEATURES)
			.then(response => response.json())
			.then(json => dispatch(recieveAllHomepageFeatures(json)))
	}
}

export default {
	fetchAllHomepageFeatures,
}