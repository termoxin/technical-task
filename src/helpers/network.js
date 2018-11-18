
export const checkResponse = (status) => {
	if(status !== 'err') {
		return true
	} else {
		return false
	}
}