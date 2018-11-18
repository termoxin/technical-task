import React, { Component } from 'react'
import Nav from '../containers/Nav'
import Main from './Main'

class App extends Component {
	render() {
		return(
			<div className="app">
				<Nav />
				<Main />
			</div>
		)
	}
}

export default App