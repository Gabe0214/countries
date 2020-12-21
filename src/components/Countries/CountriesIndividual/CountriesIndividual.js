import React, { useState, useEffect } from 'react';
import axios from 'axios';
const CountriesIndividual = (props) => {
	const [ countryDetail, setCountryDetail ] = useState({});

	const { match } = props;
	const name = match.params.name;

	useEffect(() => {
		const fetchCountry = async () => {
			try {
				const res = await axios.get(`https://restcountries.eu/rest/v2/name/${name}?fullText=true`);
				const data = res.data;
				setCountryDetail(data[0]);
			} catch (err) {
				console.log(err);
			}
		};

		fetchCountry();
	}, []);

	console.log(countryDetail);

	return (
		<div>
			<h3>Country</h3>
		</div>
	);
};

export default CountriesIndividual;
