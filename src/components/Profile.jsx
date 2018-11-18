import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getUser } from '../actions/userAction'

class Profile extends Component {
	constructor(props) {
		super(props)

		this.state = {
			status: null
		}
	}
	componentDidMount() {
		this.props.getUser(this.props.userId, () => {
			this.setState({
				status: this.props.data.status,
				fetched: true
			})
		})
	}
	render() {
		const { status } = this.state

		const user = () => {
			if(status === 'ok') {
				return 'Profile'
			}
			if(status === 'err') {
				return 'Not found'
			}
			return 'Loading...'
		}

		return (
			<div className="profile">
			{
				user()
			}
			</div>
		)
	}
}

const mapStateToProps = state => {
 	return {
 		userId: state.user.id,
 		links: state.user.links,
 		data: state.user.data
 	}
 }



const mapDispatchToProps = dispatch => {
	return {
		getUser: (id, cb) => dispatch(getUser(id, cb))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)