import { createStore, combineReducers } from 'redux';
import posts from './reducers/posts';
import filteredPosts from './reducers/filteredPosts'
import flashMessage from './reducers/flashMessage'

const reducer = combineReducers({
	posts,
	filteredPosts,
	flashMessage,
});

const store = createStore(reducer);

export default store;