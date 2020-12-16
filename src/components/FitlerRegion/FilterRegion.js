import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { useStyles } from './FilterRegionStyles/FilterRegionStyles';

const Placeholder = ({ children }) => {
	return <div>{children}</div>;
};

export const FilterRegion = function() {
	const classes = useStyles();
	const [ filterOption, setFilterOption ] = React.useState('');

	const handleChange = (e) => {
		console.log(e.target.value);
		setFilterOption(e.target.value);
	};

	return (
		<FormControl variant='filled' className={classes.formControl}>
			<Select
				value={filterOption}
				onChange={handleChange}
				displayEmpty
				renderValue={filterOption == '' ? () => <Placeholder>Filter By Region</Placeholder> : undefined}
			>
				<MenuItem value={10}>Africa</MenuItem>
				<MenuItem value={20}>America</MenuItem>
				<MenuItem value={30}>Asia</MenuItem>
				<MenuItem value={30}>Europe</MenuItem>
				<MenuItem value={30}>Oceania</MenuItem>
			</Select>
		</FormControl>
	);
};
