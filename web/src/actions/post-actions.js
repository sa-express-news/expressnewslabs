import * as types from './action-types';
import * as endpoints from './endpoints';
import fetch from 'isomorphic-fetch';

const requestAllPosts = () => {
	return {
		type: types.REQUEST_ALL_POSTS
	};
};

const recieveAllPosts = posts => {
	return {
		type: types.RECIEVE_ALL_POSTS,
		posts,
	}
};

const fetchAllPosts = () => {
	return dispatch => {
		dispatch(requestAllPosts())
		return fetch(endpoints.GET_ALL_POSTS)
			.then(response => response.json())
			.then(json => dispatch(recieveAllPosts(json)))
			.catch(error => console.log(error));
	};
};

export default {
	fetchAllPosts,
};