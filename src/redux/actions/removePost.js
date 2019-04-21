export const type = 'removePost';

const removePost = post => {
	return {
		type: type,
		payload: post,
	};
};

export default removePost;