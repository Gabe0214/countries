import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { SearchInput } from './Search/Search';
import { FilterRegion } from './FitlerRegion/FilterRegion';
import Countries from './Countries/Countries';
import CountriesPagination from './Countries/Pagination/Pagination';
import Box from '@material-ui/core/Box';
import { useStyles } from './UniversalStyles';

const Main = ({ darkMode, history }) => {
	const [ countries, setCountries ] = useState([]);
	const [ loading, setLoading ] = useState(false);
	const [ currentPage, setCurrentPage ] = useState(1);
	const [ countriesPerPage ] = useState(25);
	const [ filterOption, setFilterOption ] = useState('');
	const [ query, setQuery ] = useState('');

	const classes = useStyles();

	useEffect(() => {
		setLoading(true);
		const fetchCountries = async () => {
			try {
				const response = await axios.get('https://restcountries.eu/rest/v2/all');
				setCountries(response.data);
				setLoading(false);
			} catch (error) {
				console.log(error);
			}
		};

		fetchCountries();
	}, []);

	const indexOfLastCountry = currentPage * countriesPerPage;
	const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;
	const currentCountries = countries.slice(indexOfFirstCountry, indexOfLastCountry).filter((c) => {
		if (filterOption == '') {
			return c;
		}
		return c.region == filterOption;
	});

	const searchFilter = countries.filter((country) => country.name.toLowerCase().includes(query.toLowerCase()));

	return (
		<div>
			<Box className={classes.filterSearchBox}>
				<SearchInput darkMode={darkMode} query={query} setQuery={setQuery} countries={searchFilter} history={history} />
				<FilterRegion darkMode={darkMode} filterOption={filterOption} setFilterOption={setFilterOption} />
			</Box>
			{loading ? <h2>Loading...</h2> : <Countries darkMode={darkMode} countriesData={currentCountries} />}
			<CountriesPagination
				allCountries={countries && countries.length}
				page={currentPage}
				countriesPerPage={countriesPerPage}
				setPage={setCurrentPage}
			/>
		</div>
	);
};

export default Main;
