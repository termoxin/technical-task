import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';
import Icon from '@material-ui/core/Icon'

const styles = theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  icon: {
    margin: theme.spacing.unit * 2,
  },
  iconHover: {
    margin: theme.spacing.unit * 2,
    '&:hover': {
      color: red[800],
    },
  },
});

class FontAwesome extends React.Component {
  render() {
    const { classes, name } = this.props;

    return (
      <div className={classes.root}>
        <Icon className={classNames(classes.icon, name)} />
      </div>
    );
  }
}

FontAwesome.propTypes = {
  classes: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired
};

export default withStyles(styles)(FontAwesome);