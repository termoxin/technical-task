import { NEWS_GET } from '../constants/action-types'
import { API_URL } from '../constants/api-types'
import { checkResponse } from '../helpers/network'
import axios from 'axios'

export const successGetting = data => {
	return {
		type: NEWS_GET,
		payload: data
	}
}

export const newsGet = () => {
	return function(dispatch) {
		axios.get(API_URL + '/news')
			.then(response => {
				if(checkResponse(response.data.status)) {
					dispatch(successGetting(response.data.data))
				}
			})
			.catch(error => console.log(error))
	}
}