export const type = 'setMessage';

const setMessage = message => {
	return {
		type: type,
		payload: message,
	};
};

export default setMessage;