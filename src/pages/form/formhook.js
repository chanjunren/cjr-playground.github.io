import {useReducer, useCallback} from 'react';

// revise what is useCallback for

const formReducer = (state,action) => {
	switch (action.type) {
		case 'formInput': {
			state = {...state, [action.id]: action.value};
			break;
		}
		default: {
			console.log("Unhandled case in formReducer");
		}
	}
	console.log(state);
}

export default function useForm(initialState) {
	const [state, dispatch] = useReducer(formReducer, initialState);
	const formInputHandler = useCallback((id, inputValue) => {
		dispatch({type: 'formInput', id: id, value: inputValue});
	});
	
	return {state, formInputHandler};
};
