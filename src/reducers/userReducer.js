
function reducer(state={
	isAuth: false
}, action) {
	switch(action.type) {
		case "USER_AUTH": {
			return {...state, isAuth: true, id: action.payload.id, error: action.payload.error}
		}
		case "USER_LOGOUT": {
			return {...state, isAuth: false}
		}
		case "USER_INVALID": {
			return {...state, error: action.payload.error}
		}
		default: {
			return state
		}

	}
}

export default reducer