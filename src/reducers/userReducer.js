import { sortLinks } from '../helpers/sort'

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
		case "USER_GET": {
			let filteredSocialLinks = sortLinks(action.payload.data)
			return {...state, links: filteredSocialLinks, data: action.payload}
		}
		default: {
			return state
		}

	}
}

export default reducer