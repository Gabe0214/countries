import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { useStyles } from './NavbarStyles/NavbarStyles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-regular-svg-icons';
const NavBar = () => {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<AppBar position='static'>
				<Toolbar>
					<Typography className={classes.title} variant='h6' noWrap>
						Where In The World
					</Typography>
					<div>
						<FontAwesomeIcon icon={faMoon} />
						<span>Dark Mode</span>
					</div>
				</Toolbar>
			</AppBar>
		</div>
	);
};

export default NavBar;
