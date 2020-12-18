import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { SearchInput } from './Search/Search';
import { FilterRegion } from './FitlerRegion/FilterRegion';
import Countries from './Countries/Countries';
import { useStyles } from './Countries/CountryCard/CountryCardStyles';
import CountriesPagination from './Countries/Pagination/Pagination';

const Main = ({ darkMode }) => {
	const [ countries, setCountries ] = useState([]);
	const [ loading, setLoading ] = useState(false);
	const [ currentPage, setCurrentPage ] = useState(1);
	const [ countriesPerPage ] = useState(25);
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
	const currentCountries = countries.slice(indexOfFirstCountry, indexOfLastCountry);

	return (
		<div>
			<SearchInput darkMode={darkMode} />
			<FilterRegion darkMode={darkMode} />
			{loading ? <h2>Loading...</h2> : <Countries darkMode={darkMode} countriesData={currentCountries} />}
			<CountriesPagination
				allCountries={countries && countries.length}
				page={currentPage}
				countriesPerPage={countriesPerPage}
			/>
		</div>
	);
};

export default Main;
