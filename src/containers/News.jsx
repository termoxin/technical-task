import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CardItem from '../components/Card'
import { connect } from 'react-redux'
import Grid from '@material-ui/core/Grid'
import { newsGet } from '../actions/newsAction'

class News extends Component {
	componentDidMount() {
		this.props.newsGet()
	}
	render() {
		const { news } = this.props.news
		return(
			<div>
				<Grid container>
        			{
					news.map((item, index) => (
						<Grid item key={index} md={4}>
							<CardItem title={item.title} text={item.text}/>
	        			</Grid>
					))
					}
					Count: {news.length}
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

const mapDispatchToProps = (dispatch) => ({
	newsGet: () => dispatch(newsGet())
})

News.propTypes = {
	news: PropTypes.objectOf(PropTypes.array),
	newsGet: PropTypes.func
}

export default connect(mapStateToProps, mapDispatchToProps)(News)