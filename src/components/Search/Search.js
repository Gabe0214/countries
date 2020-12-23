import React from 'react';
import TextField from '@material-ui/core/TextField';
import { useStyles } from './SearchStyles/SearchStyles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { NameMenu } from './NameMenu/NamesMenu';
export const SearchInput = ({ darkMode, query, setQuery, countries, history }) => {
	const classes = useStyles();
	return (
		<form className={classes.root}>
			<TextField
				id='filled-basic'
				placeholder='Search for a country...'
				variant='filled'
				fullWidth={true}
				color='primary'
				value={query}
				onChange={(e) => {
					return setQuery(e.target.value), e.preventDefault();
				}}
			/>
			<FontAwesomeIcon icon={faSearch} style={{ opacity: darkMode ? '1' : '0.42' }} className={classes.icon} />
			<NameMenu countriesList={countries} query={query} history={history} />
		</form>
	);
};
