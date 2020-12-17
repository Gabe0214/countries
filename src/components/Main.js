import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { SearchInput } from './Search/Search';
import { FilterRegion } from './FitlerRegion/FilterRegion';
import Countries from './Countries/Countries';

const Main = ({ darkMode }) => {
	const [ countries, setCountries ] = useState([]);

	useEffect(() => {
		const fetchCountries = async () => {
			try {
				const response = await axios.get('https://restcountries.eu/rest/v2/all');
				setCountries(response.data);
			} catch (error) {
				console.log(error);
			}
		};

		fetchCountries();
	}, []);

	console.log(countries);

	return (
		<div>
			<SearchInput darkMode={darkMode} />
			<FilterRegion darkMode={darkMode} />
			<Countries darkMode={darkMode} />
		</div>
	);
};

export default Main;
