import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CardItem from '../components/Card'
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

News.propTypes = {
	news: PropTypes.objectOf(PropTypes.array)
}

export default connect(mapStateToProps)(News)