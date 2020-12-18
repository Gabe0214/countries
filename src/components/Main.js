import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { SearchInput } from './Search/Search';
import { FilterRegion } from './FitlerRegion/FilterRegion';
import Countries from './Countries/Countries';
import { useStyles } from './Countries/CountryCard/CountryCardStyles';

const Main = ({ darkMode }) => {
	const [ countries, setCountries ] = useState([]);
	const [ loading, setLoading ] = useState(false);
	useEffect(() => {
		setLoading(true);
		const fetchCountries = async () => {
			try {
				const response = await axios.get('https://restcountries.eu/rest/v2/all');
				setCountries(response.data.splice(0, 24));
				setLoading(false);
			} catch (error) {
				console.log(error);
			}
		};

		fetchCountries();
	}, []);

	return (
		<div>
			<SearchInput darkMode={darkMode} />
			<FilterRegion darkMode={darkMode} />
			{loading ? <h2>Loading...</h2> : <Countries darkMode={darkMode} countriesData={countries} />}
		</div>
	);
};

export default Main;
