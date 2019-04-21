import { type as loadPostsType } from '../actions/loadPosts';
import { type as addPostType } from '../actions/addPost';
import { type as removePostType } from '../actions/removePost';

const defaultState = [
];

function reducer(state = defaultState, {type, payload}){
	switch (type) {
		case loadPostsType:
			return payload;
		
		case addPostType:
			return [
				...state,
				{
					id: payload.id,
					name: payload.name,
					description: payload.description
				}
			];

		case removePostType:

			let posts = state;
			let idToRemove = payload.id;
			let postsNew = posts.filter(post => post.id !== idToRemove);
			
			return postsNew;

		default:
			return state;
	}
}

export default reducer;