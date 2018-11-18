import { USER_AUTH, USER_LOGOUT, USER_INVALID, USER_GET } from '../constants/action-types'
import { API_URL } from '../constants/api-types'
import { checkResponse } from '../helpers/network'
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
			error
		}
	}
}

export const userAuth = (user, cb, cbError) => {
	return function(dispatch) {
		axios.post(API_URL+'/validate', {
			email: user.email,
			password: user.password
		})
		.then(response => {
			const { status, message, data } = response.data

			if(checkResponse(status)) {
				dispatch(loginSuccess(data.id))
				cb()
			} else {
				throw Error(message)
			}
		})
		.catch(error => {
			dispatch(loginFailure(error))
			cbError()
		})
	}
}

export const getUser = (id, cb) => {
	return function(dispatch) {
		axios.get(API_URL+`/user-info/${id}`)
			.then(response => {
				dispatch({
					type: USER_GET,
					payload: response.data
				})
				cb()
			})
			.catch(error => {
				console.log(error)
			})
	}
}

export const userLogout = (state, action) => {	
	return function(dispatch) {
		localStorage.setItem('isAuth', JSON.stringify({isAuth: false}))
		dispatch({ type: USER_LOGOUT })
	}
}