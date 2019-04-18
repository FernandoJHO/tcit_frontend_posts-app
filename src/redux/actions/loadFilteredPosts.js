export const type = 'loadFilteredPosts';

const loadFilteredPosts = filteredPosts => {
	return {
		type: type,
		payload: filteredPosts,
	};
};

export default loadFilteredPosts;