import React from 'react';
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    marginTop: 30
  },
});

function SimpleList(props) {
  const { classes, data } = props;
  return (
    <div className={classes.root}>
      <List component="nav">
        {
        	data.map((item, index) => (
				<ListItem button key={index}>
				  <ListItemText primary={item} />
				</ListItem>
        	))
        }
      </List>
      <Divider />
    </div>
  );
}

SimpleList.propTypes = {
	data: PropTypes.array
}

export default withStyles(styles)(SimpleList);