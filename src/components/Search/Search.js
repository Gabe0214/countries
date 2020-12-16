import React from 'react';
import TextField from '@material-ui/core/TextField';
import { useStyles } from './SearchStyles/SearchStyles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
export const SearchInput = () => {
	const classes = useStyles();
	return (
		<form className={classes.root}>
			<TextField
				id='filled-basic'
				placeholder='Search for a country...'
				variant='filled'
				fullWidth={true}
				color='primary'
			/>
			<FontAwesomeIcon icon={faSearch} style={{ position: 'absolute', top: '17px', left: '32px', opacity: '0.42' }} />
		</form>
	);
};
