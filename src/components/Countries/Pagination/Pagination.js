import React from 'react';
import Pagination from '@material-ui/lab/Pagination';
import { useStyles } from './PaginationStyles';

const CountriesPagination = ({ currentPage, countriesPerPage, setPage, allCountries }) => {
	const classes = useStyles();

	const pages = Math.ceil(allCountries / countriesPerPage);

	const changeHandler = (e, v) => {
		console.log(v);
	};

	return (
		<div className={classes.root}>
			<Pagination count={pages} page={currentPage} defaultPage={1} color='primary' onChange={changeHandler} />
		</div>
	);
};

export default CountriesPagination;
