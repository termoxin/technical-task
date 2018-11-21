import React, { Component } from 'react'
import { userAuth } from '../actions/userAction'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import errors from '../constants/errors'
import Error from '../components/Error'
import { testEmail, testPassword } from '../helpers/inputs'
import Loader from '../components/Loader'			

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
		this.handleEnter = this.handleEnter.bind(this)
		this.validate = this.validate.bind(this)
	}

	handleChange = name => event => {
	    this.setState({
	      [name]: event.target.value,
	    });
 	};

 	handleEnter(e) {
 		if(e.keyCode === 13 && this.validate()) this.handleAuth()
 	}

	handleAuth() {
		const { email, password } = this.state
		const { userAuth } = this.props;

		const cbError = () => {
			this.setState({ 
				loading: false, 
				fetched: true, 
				email: '', 
				password: '' 
			})
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
			<div className="form_wrapper" onKeyUp={this.handleEnter}>
				{ loading ? <Loader /> : '' }
										
				{ fetched ? <Error errorText={errors[error.message]} /> : ''}
				<div className="form">
					<TextField
						label="Email"
						margin="normal"
						onChange={this.handleChange('email')}
						value={this.state.email}
			        />
			         <TextField
						label="Password"
						type="password"
						margin="normal"
						onChange={this.handleChange('password')}
						value={this.state.password}
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

Login.propTypes = {
	error: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
	isAuth: PropTypes.bool,
	userAuth: PropTypes.func.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)