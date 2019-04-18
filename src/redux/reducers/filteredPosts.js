import { type as loadFilteredPostsType } from '../actions/loadFilteredPosts';

const defaultState = [];

function reducer(state = defaultState, {type, payload}){
	switch (type) {
		case loadFilteredPostsType:
			return payload;
		default:
			return state;
	}
}

export default reducer;