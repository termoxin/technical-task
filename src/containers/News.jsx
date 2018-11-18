import React, { Component } from 'react'
import CardItem from './Card'
import { connect } from 'react-redux'
import Grid from '@material-ui/core/Grid';

class News extends Component {
	render() {
		const { news } = this.props.news
		return(
			<div>
				<Grid container>
        			{
					news.map((item, index) => (
						<Grid item key={index} md={4}>
							<CardItem name={item.name}/>
	        			</Grid>
					))
					}
				</Grid>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		news: state.news
	}
}

export default connect(mapStateToProps)(News)