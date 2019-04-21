import { type as loadFilteredPostsType } from '../actions/loadFilteredPosts';
import { type as removeFilteredPostType } from '../actions/removeFilteredPost';

const defaultState = [];

function reducer(state = defaultState, {type, payload}){
	switch (type) {
		case loadFilteredPostsType:
			return payload;
		case removeFilteredPostType:
			let posts = state;
			let idToRemove = payload.id;
			let postsNew = posts.filter(post => post.id !== idToRemove);

			return postsNew;
		default:
			return state;
	}
}

export default reducer;