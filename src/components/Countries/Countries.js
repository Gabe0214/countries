import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { darkTheme, lightTheme } from '../UniversalStyles';
import { ThemeProvider } from '@material-ui/core/styles';
import CountryCard from './CountryCard/CountryCard';
import { cardLight, cardDark } from './CountryCard/CountryCardStyles';

const Countries = ({ darkMode }) => {
	const data = [
		{ name: 'United States', region: 'NA', text: 'America, Fuck yea' },
		{ name: 'Germany', region: 'EUW', text: 'Hamburger' }
	];
	return (
		<ThemeProvider theme={darkMode ? cardDark : cardLight}>
			<Container maxWidth='sm'>
				{data.map((country) => <CountryCard name={country.name} region={country.region} text={country.text} />)}
			</Container>
		</ThemeProvider>
	);
};

export default Countries;
