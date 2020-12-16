import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
	formControl: {
		margin: theme.spacing(1),
		minWidth: 120
	},
	selectEmpty: {
		marginTop: theme.spacing(2)
	}
}));

const Placeholder = ({ children }) => {
	return <div>{children}</div>;
};

export const FilterRegion = function() {
	const classes = useStyles();
	const [ age, setAge ] = React.useState('');

	const handleChange = (event) => {
		setAge(event.target.value);
	};

	return (
		<FormControl variant='filled' className={classes.formControl}>
			<Select
				value={age}
				onChange={handleChange}
				displayEmpty
				renderValue={age == '' ? () => <Placeholder>Filter By Region</Placeholder> : undefined}
			>
				<MenuItem value={10}>Ten</MenuItem>
				<MenuItem value={20}>Twenty</MenuItem>
				<MenuItem value={30}>Thirty</MenuItem>
			</Select>
		</FormControl>
	);
};
