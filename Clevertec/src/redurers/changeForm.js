export function changeForm(state = {}, action) {
	switch (action.type) {
		case 'CHANGE_FORM':
			return Object.assign({}, state, action.changeForm);
		default:
			return state;
	}
}

