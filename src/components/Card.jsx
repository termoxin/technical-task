import React from 'react'
import PropTypes from 'prop-types'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  card: {
    minWidth: 275,
    margin: 30
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },};

const CardItem = (props) => {
  const { classes, title, text } = props;

	return <Card className={classes.card}>
      <CardContent>
        <Typography variant="h5" component="h2">
          { title }
        </Typography>
         <Typography component="p">
          { text }
        </Typography>
      </CardContent>
    </Card>
}

CardItem.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string
}

export default withStyles(styles)(CardItem);