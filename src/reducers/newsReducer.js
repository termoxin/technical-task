
function reducer(state = {
	news: []
}, action) {
	switch(action.type) {
		case "NEWS_GET": {
			return {...state, news: action.payload}
		}
		default: {
			return state
		}
	}
}

export default reducer