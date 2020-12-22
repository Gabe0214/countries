import React from 'react';
import { useStyles } from './NamesMenuStyles';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

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
