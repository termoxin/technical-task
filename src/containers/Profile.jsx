import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getUser } from '../actions/userAction'
import SimpleList from '../components/SimpleList'
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List'
import FontAwesome from '../components/FontAwesome'

const icons = [
	<FontAwesome name="fas fa-globe" />,
	<FontAwesome name="fab fa-twitch" />,
	<FontAwesome name="fab fa-twitter"/>,
	<FontAwesome name="fab fa-youtube"/>,
	<FontAwesome name="fab fa-telegram"/>,
	<FontAwesome name="fab fa-vk"/>
]

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
		const { data, links } = this.props

		const user = () => {
			if(status === 'ok') {
				return (
					<div className="info">
						<h1>Город: {data.data.city}</h1>
							<SimpleList data={data.data.languages} />
								<List component="nav">
								{
									links.map((item, index) => (
										<ListItem 
											button 
											key={index} 
											component="a" 
											href={item.link} 
											target="__blank">
										  {icons[index]}
										  <ListItemText primary={item.label} />
										</ListItem>			
									))
								}
								</List>
					</div>
				)
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