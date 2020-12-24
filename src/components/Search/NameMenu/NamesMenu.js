import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		flexWrap: 'wrap',
		justifyContent: 'center',
		position: 'absolute',
		top: '56px',
		left: '0px',
		zIndex: '15',
		paddingTop: '5px',

		'& > *': {
			margin: '0',
			width: '92%',
			height: '300px',
			overflowY: 'auto',
			[theme.breakpoints.up('lg')]: {
				width: '100%'
			}
		},

		'& .MuiPaper-root': {
			backgroundColor: theme.palette.primary.main
		}
	}
}));

export const NameMenu = ({ countriesList, query, history }) => {
	const classes = useStyles();
	return query !== '' ? (
		<div className={classes.root}>
			<Paper elevation={5}>
				<List>
					{countriesList.map((country) => (
						<ListItem button key={country.name}>
							<ListItemText primary={country.name} onClick={() => history.push(`/country/${country.alpha3Code}`)} />
						</ListItem>
					))}
				</List>
			</Paper>
		</div>
	) : null;
};
