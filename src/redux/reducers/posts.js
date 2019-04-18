import { type as loadPostsType } from '../actions/loadPosts';
import { type as addPostType } from '../actions/addPost';

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

		default:
			return state;
	}
}

export default reducer;