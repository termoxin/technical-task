import React, { Component } from 'react'
import Icon from '@material-ui/core/Icon';

class Error extends Component {
	render() {
		return(
			<div className="error">
				<Icon>error</Icon>
				<span>{this.props.errorText}</span>
			</div>
		)
	}
}

export default Error