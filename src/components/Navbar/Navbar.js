import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { useStyles } from './NavbarStyles/NavbarStyles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon as light } from '@fortawesome/free-regular-svg-icons';
import { faMoon as dark } from '@fortawesome/free-solid-svg-icons';
const NavBar = ({ darkmode, setDarkMode }) => {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<AppBar position='static' elevation={3}>
				<Toolbar className={classes.toolbar}>
					<Typography className={classes.title} variant='h6' noWrap>
						Where In The World?
					</Typography>
					<div onClick={() => setDarkMode((prevState) => !prevState)} className={classes.iconContainer}>
						{darkmode ? (
							<FontAwesomeIcon icon={dark} className={classes.fontI} />
						) : (
							<FontAwesomeIcon icon={light} className={classes.fontI} />
						)}
						<span>Dark Mode</span>
					</div>
				</Toolbar>
			</AppBar>
		</div>
	);
};

export default NavBar;
