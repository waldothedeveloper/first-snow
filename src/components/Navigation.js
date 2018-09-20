import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import IconButton from '@material-ui/core/IconButton';
import Hidden from '@material-ui/core/Hidden';
import Divider from '@material-ui/core/Divider';
import MenuIcon from '@material-ui/icons/Menu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const drawerWidth = 240;

const styles = (theme) => ({
	root: {
		flexGrow: 1,
		height: 440,
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
	state = {
		mobileOpen: false
	};

	handleDrawerToggle = () => {
		this.setState((state) => ({ mobileOpen: !state.mobileOpen }));
	};

	render() {
		const { classes } = this.props;
		const drawer = (
			<div>
				<div className={classes.toolbar} />
				<Divider />
				<List>Weather</List>
				<Divider />
				<List>About</List>
				<Divider />
				<List>Contact</List>
			</div>
		);

		return (
			<div className={classes.root}>
				<AppBar className={classes.appBar} position="static">
					<Toolbar className={classes.toRight}>
						<FontAwesomeIcon icon="snowflake" size="lg" spin />
						<IconButton
							color="inherit"
							aria-label="Open drawer"
							onClick={this.handleDrawerToggle}
							className={classes.navIconHide}
						>
							<MenuIcon />
						</IconButton>
					</Toolbar>
				</AppBar>
				<Hidden mdUp>
					<Drawer
						variant="temporary"
						anchor="right"
						open={this.state.mobileOpen}
						onClose={this.handleDrawerToggle}
						classes={{
							paper: classes.drawerPaper
						}}
						ModalProps={{
							keepMounted: true // Better open performance on mobile.
						}}
					>
						{drawer}
					</Drawer>
				</Hidden>
				<Hidden smDown implementation="css">
					<Drawer
						variant="permanent"
						open
						classes={{
							paper: classes.drawerPaper
						}}
					>
						{drawer}
					</Drawer>
				</Hidden>
			</div>
		);
	}
}

Navigation.propTypes = {
	classes: PropTypes.object.isRequired,
	theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(Navigation);
