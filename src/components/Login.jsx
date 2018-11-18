import React, { Component } from 'react'
import { userAuth } from '../actions/userAction'
import { connect } from 'react-redux'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Notification from './Notification'

class Login extends Component {
	constructor(props) {
		super(props)

		this.state = {
			email: '',
			password: '',
			fetched: false
		}

		this.handleAuth = this.handleAuth.bind(this)
	}
	handleChange = name => event => {
	    this.setState({
	      [name]: event.target.value,
	      fetched: false
	    });
 	};
	handleAuth() {
		const { email, password } = this.state

		this.props.userAuth({
			email, 
			password
		}, () => {
			this.props.history.push('/profile')
		})

		this.setState({
			fetched: true
		})
	}
	render() {
		return(
			<div>
				<div className="form">
					<TextField
						label="Email"
						margin="normal"
						onChange={this.handleChange('email')}
			        />
			         <TextField
						label="Password"
						type="password"
						margin="normal"
						onChange={this.handleChange('password')}
			        />
			        <Button 
				        variant="contained" 
				        color="primary" 
				        onClick={this.handleAuth}
				        style={{ marginTop: 15 }}
			        >
	       				Login
	      			</Button>
				</div>
				<Notification open={this.state.fetched}/>
			</div>
		)
	}
}

const mapDispatchToProps = dispatch => {
	return {
		userAuth: (user, cb) => dispatch(userAuth(user, cb))
	}
}

const mapStateToProps = state => {
	return {
		isAuth: state.user.isAuth
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)