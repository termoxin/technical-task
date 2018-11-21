import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const styles = {
  root: {
    flexGrow: 1,
    marginTop: 20
  },
};

function Loader(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <CircularProgress className={classes.progress} color="secondary" />
    </div>
  );
}

Loader.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Loader);