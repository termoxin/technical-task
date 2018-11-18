import React, { Component } from 'react'
import { userAuth } from '../actions/userAction'
import { connect } from 'react-redux'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import errors from '../constants/errors'
import Error from '../components/Error'
import { testEmail, testPassword } from '../helpers/inputs'

class Login extends Component {
	constructor(props) {
		super(props)

		this.state = {
			email: '',
			password: '',
			fetched: false,
			loading: false,
		}

		this.handleAuth = this.handleAuth.bind(this)
		this.validate = this.validate.bind(this)
	}

	handleChange = name => event => {
	    this.setState({
	      [name]: event.target.value,
	    });
 	};

	handleAuth() {
		const { email, password } = this.state
		const { userAuth } = this.props;

		const cbError = () => {
			this.setState({ loading: false, fetched: true })
		}
		const cb = () => {
			this.setState({ loading: false, fetched: true })
			this.props.history.push('/profile')
		}

		this.setState({
			loading: true
		})

		userAuth({
			email, 
			password
		}, cb, cbError)
	}

	validate() {
		const { email, password } = this.state

		if(!testPassword(password)) {
			return false
		}

		if(!testEmail(email)) {
			return false
		}
		return true
	}

	render() {

		const { fetched, loading } = this.state
		const { error } = this.props

		return(
			<div className="form_wrapper">
				{ loading ? 'Loading...' : '' }
				{ fetched ? <Error errorText={errors[error.message]} /> : ''}
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
				        disabled={!this.validate()}
			        >
	       				Login
	      			</Button>
				</div>
			</div>
		)
	}
}

const mapDispatchToProps = dispatch => {
	return {
		userAuth: (user, cb, cbError) => dispatch(userAuth(user, cb, cbError))
	}
}

const mapStateToProps = state => {
	return {
		isAuth: state.user.isAuth,
		error: state.user.error,
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)