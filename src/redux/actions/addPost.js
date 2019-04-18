export const type = 'addPost';

const addPost = post => {
	return {
		type: type,
		payload: post,
	};
};

export default addPost;