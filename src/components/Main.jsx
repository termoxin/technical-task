import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Login from '../containers/Login'
import NotFound from './NotFound'
import Profile from '../containers/Profile'
import Home from './Home'
import PrivateRoute from '../containers/PrivateRoute'
import News from '../containers/News'

class Main extends Component {
	render() {
		return(
			<div>
				<Switch>
					<Route exact path="/" component={Home}></Route>
					<Route path="/login" component={Login}></Route>
					<Route path="/news" component={News}></Route>
					<Route path="/profile">
						<PrivateRoute component={Profile} />
					</Route>
					<Route component={NotFound}></Route>
				</Switch>
			</div>
		)
	}
}

export default Main