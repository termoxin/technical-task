import { NEWS_GET } from '../constants/action-types'

export const newsGet = (state, action) => {
	return {
		type: NEWS_GET,
		payload: action.payload
	}
}