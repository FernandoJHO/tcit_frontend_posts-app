export const type = 'removeFilteredPost';

const removeFilteredPost = post => {
	return {
		type: type,
		payload: post,
	};
};

export default removeFilteredPost;