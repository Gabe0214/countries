import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { useStyles, selectThemeLight, selectThemeDark } from './FilterRegionStyles/FilterRegionStyles';
import { ThemeProvider } from '@material-ui/core/styles';

const Placeholder = ({ children }) => {
	return <div style={{ fontWeight: 600, fontFamily: 'Nunito' }}>{children}</div>;
};

export const FilterRegion = function({ darkMode, filterOption, setFilterOption }) {
	const classes = useStyles();

	const handleChange = (e) => {
		// console.log(e.target.value);
		setFilterOption(e.target.value);
	};

	return (
		<FormControl variant='filled' className={classes.formControl}>
			<ThemeProvider theme={darkMode ? selectThemeDark : selectThemeLight}>
				<Select
					value={filterOption}
					onChange={handleChange}
					displayEmpty
					renderValue={filterOption == '' ? () => <Placeholder>Filter By Region</Placeholder> : undefined}
					color='primary'
				>
					<MenuItem value={'Africa'}>Africa</MenuItem>
					<MenuItem value={'Americas'}>Americas</MenuItem>
					<MenuItem value={'Asia'}>Asia</MenuItem>
					<MenuItem value={'Europe'}>Europe</MenuItem>
					<MenuItem value={'Oceania'}>Oceania</MenuItem>
				</Select>
			</ThemeProvider>
		</FormControl>
	);
};
