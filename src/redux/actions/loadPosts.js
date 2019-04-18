export const type = 'loadPosts';

const loadPosts = posts => {
	return {
		type: type,
		payload: posts,
	};
};

export default loadPosts;

//actions: loadPosts, loadFilteredPosts, createPost, deletePost