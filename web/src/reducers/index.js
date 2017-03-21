import { combineReducers } from 'redux';

// Reducers
import post from './post-reducer';
import homepageFeature from './homepage-feature-reducer';

// Combine Reducers
const reducers = combineReducers({
    post,
    homepageFeature,
});

export default reducers;