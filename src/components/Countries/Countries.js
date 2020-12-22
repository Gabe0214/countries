import React from 'react';
import Container from '@material-ui/core/Container';
import { ThemeProvider } from '@material-ui/core/styles';
import CountryCard from './CountryCard/CountryCard';
import { cardLight, cardDark } from './CountryCard/CountryCardStyles';
import CssBaseline from '@material-ui/core/CssBaseline';

const Countries = ({ darkMode, countriesData }) => {
	return (
		<ThemeProvider theme={darkMode ? cardDark : cardLight}>
			{/* <CssBaseline /> */}
			<Container maxWidth='sm'>
				{countriesData &&
					countriesData.map((country) => (
						<CountryCard
							name={country.name}
							region={country.region}
							population={country.population}
							capital={country.capital}
							flag={country.flag}
							key={country.name}
							alphaCode={country.alpha3Code}
						/>
					))}
			</Container>
		</ThemeProvider>
	);
};

export default Countries;
