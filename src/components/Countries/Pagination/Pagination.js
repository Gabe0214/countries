import React from 'react';
import Pagination from '@material-ui/lab/Pagination';
import { useStyles } from './PaginationStyles';

const CountriesPagination = ({ currentPage, countriesPerPage, setPage, allCountries }) => {
	const classes = useStyles();

	const pages = Math.ceil(allCountries / countriesPerPage);

	return (
		<div className={classes.root}>
			<Pagination count={pages} page={currentPage} defaultPage={1} color='primary' onChange={(e, v) => setPage(v)} />
		</div>
	);
};

export default CountriesPagination;
