import React from 'react';
import Container from '@material-ui/core/Container';
import { ThemeProvider } from '@material-ui/core/styles';
import CountryCard from './CountryCard/CountryCard';
import { cardLight, cardDark } from './CountryCard/CountryCardStyles';
import { useStyles } from './CountryCard/CountryCardStyles';

const Countries = ({ darkMode, countriesData }) => {
	const classes = useStyles();
	return (
		<ThemeProvider theme={darkMode ? cardDark : cardLight}>
			<Container className={classes.container}>
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
