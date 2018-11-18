import { USER_AUTH, USER_LOGOUT, USER_INVALID } from '../constants/action-types'
import { API_VALIDATE } from '../constants/api-types'
import { checkResponse } from '../helpers'
import axios from 'axios'

export function loginSuccess (id) {
	return {
		type: USER_AUTH,
		payload: {
			id,
			error: false
		}
	}
}
export function loginFailure (error) {
	return {
		type: USER_INVALID,
		payload: {
			error: true
		}
	}
}

export const userAuth = (user, cb) => {
	return function(dispatch) {
		axios.post(API_VALIDATE, {
			email: user.email,
			password: user.password
		})
		.then(response => {
			const { status, message, data } = response.data

			if(checkResponse(status)) {
				dispatch(loginSuccess(data.id))
				cb()
			} else {
				throw Error()
			}
		})
		.catch(error => {
			dispatch(loginFailure())
		})
	}
}

export const userLogout = (state, action) => {	
	return function(dispatch) {
		localStorage.setItem('isAuth', JSON.stringify({isAuth: false}))
		dispatch({ type: USER_LOGOUT })
	}
}