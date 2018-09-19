import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const styles = {
	root: {
		flexGrow: 1
	},
	toRight: {
		justifyContent: 'space-between'
	}
};

function Navigation(props) {
	const { classes } = props;

	return (
		<div className={classes.root}>
			<AppBar position="static" color={props.bgColor}>
				<Toolbar className={classes.toRight}>
					<FontAwesomeIcon icon="snowflake" size="lg" spin />
					<IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
						<MenuIcon />
					</IconButton>
				</Toolbar>
			</AppBar>
		</div>
	);
}

Navigation.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Navigation);
