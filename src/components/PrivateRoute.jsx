import React from 'react'
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

export default connect(mapStateToProps)(PrivateRoute)