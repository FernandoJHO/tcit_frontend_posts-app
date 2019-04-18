import { type as setMessageType } from '../actions/setMessage';

const defaultState = '';

function reducer(state = defaultState, {type, payload}){
	switch (type){
		case setMessageType:
			return payload;

		default:
			return state;
	}
}

export default reducer;