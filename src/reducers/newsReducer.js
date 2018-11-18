
function reducer(state = {
	news: [
		{id: 1, name: "Book"},
		{id: 2, name: "Sport"},
		{id: 3, name: "Programming"},
		{id: 4, name: "Motivation"},
		{id: 5, name: "English"},
		{id: 6, name: "Videos"},
	]
}, action) {
	switch(action.type) {
		case "NEWS_GET": {
			return state.news
		}
		default: {
			return state
		}
	}
}

export default reducer