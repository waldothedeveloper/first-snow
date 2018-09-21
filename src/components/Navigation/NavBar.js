import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const drawerWidth = 240;

const styles = (theme) => ({
	root: {
		flexGrow: 1,
		height: 56,
		zIndex: 1,
		overflow: 'hidden',
		position: 'relative',
		display: 'flex',
		width: '100%'
	},
	appBar: {
		position: 'absolute',
		[theme.breakpoints.up('md')]: {
			width: '100%'
		}
	},
	navIconHide: {
		[theme.breakpoints.up('md')]: {
			display: 'none'
		}
	},
	toolbar: theme.mixins.toolbar,
	drawerPaper: {
		width: drawerWidth,
		[theme.breakpoints.up('md')]: {
			position: 'relative'
		},
		backgroundColor: '#2E3244',
		alignItems: 'center',
		color: '#fafbf6',
		fontSize: 32
	},
	content: {
		flexGrow: 1,
		backgroundColor: theme.palette.primary,
		padding: theme.spacing.unit * 3
	},
	toRight: {
		justifyContent: 'space-between'
	}
});

class Navigation extends React.Component {
	render() {
		const { classes } = this.props;
		return (
			<div className={classes.root}>
				<AppBar className={classes.appBar} position="static">
					<Toolbar className={classes.toRight}>
						<FontAwesomeIcon className={styles.color} icon="snowflake" size="lg" spin />
						<IconButton color="default">
							<MenuIcon />
						</IconButton>
					</Toolbar>
				</AppBar>
			</div>
		);
	}
}

Navigation.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(Navigation);
