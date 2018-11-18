import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'
import { connect } from "react-redux"
import { userLogout } from '../actions/userAction'

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

const Nav = (props) => {
	const { classes, isAuth } = props;

	const handleLogout = () => {
		if(isAuth) {
			props.userLogout()
		}
	}

	const Profile = () => <Button color="inherit">Profile</Button>
	const Logout = () => <Button color="inherit" onClick={handleLogout}>Logout</Button>
	const Login = () => <Button color="inherit">Login</Button>

	return(
		<div className={classes.root}>
			<AppBar position="static">
		        <Toolbar>
		          <Typography variant="h6" color="inherit" className={classes.grow}>
		            <Link to="/news">News</Link>
		          </Typography>
		          <Link to="/">
		          	<Button color="inherit">Home</Button>
		          </Link>
		          <Link to="/login">
		          	{ !isAuth ? Login() : ''}
		          </Link>
		          <Link to="/profile">
		          	{isAuth ? Profile() : ''}
		          </Link>
		          	{isAuth ? Logout() : ''}
		        </Toolbar>
	      	</AppBar>
		</div>
	)
}


const mapStateToProps = (state) => {
	return {
		isAuth: state.user.isAuth
	}
}

const mapDispatchToProps = dispatch => {
	return {
		userLogout: () => dispatch(userLogout())
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Nav))