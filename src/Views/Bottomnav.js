import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';

const styles = {
  root: {
    width: "100%",
  },
};

class Bottomnav extends React.Component {
  state = {
    value: '',
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;
    var conditional = '';
    if (this.props.auth){
      conditional = (
        <BottomNavigation
        value={value}
        onChange={this.handleChange}
        showLabels
        className={classes.root}
      >
        <BottomNavigationAction label="My Profile" icon={<RestoreIcon />} />
        <BottomNavigationAction label="My Rides" icon={<FavoriteIcon />} />
        <BottomNavigationAction component={Link} to="/request" label="New" icon={<LocationOnIcon />}/>
      </BottomNavigation>
        );
    }
    return (
      <div>
      {conditional}
      </div>
    );
  }
}

Bottomnav.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Bottomnav);