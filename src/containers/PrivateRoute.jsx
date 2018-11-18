import React from 'react'
import PropTypes from 'prop-types'
import { Redirect, Route } from 'react-router-dom'
import { connect } from 'react-redux'

const PrivateRoute = ({ component: Component, isAuth, ...rest }) => {
	return(
		<div>
			<Route render={props => 
				Boolean(isAuth) ? 
				<Component {...rest} /> :
				<Redirect to='/login'/>
			}></Route>
		</div>
	)
}

const mapStateToProps = (state) => {
	return {
		isAuth: state.user.isAuth
	}
}

PrivateRoute.propTypes = {
	isAuth: PropTypes.bool,
	component: PropTypes.oneOfType([
		PropTypes.element,
		PropTypes.func
	]).isRequired
}

export default connect(mapStateToProps)(PrivateRoute)