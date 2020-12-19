import React from 'react';
import TextField from '@material-ui/core/TextField';
import { useStyles } from './SearchStyles/SearchStyles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { NameMenu } from './NameMenu/NamesMenu';
export const SearchInput = ({ darkMode, query, setQuery, countries }) => {
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
			<FontAwesomeIcon
				icon={faSearch}
				style={{ position: 'absolute', top: '17px', left: '32px', opacity: darkMode ? '1' : '0.42' }}
			/>
			{/* <NameMenu countriesList={countries} query={query} /> */}
		</form>
	);
};
