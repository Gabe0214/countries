import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { darkTheme, lightTheme } from '../UniversalStyles';
import { ThemeProvider } from '@material-ui/core/styles';
import CountryCard from './CountryCard/CountryCard';

const Countries = ({ darkMode }) => {
	const data = [
		{ name: 'United States', region: 'NA', text: 'America, Fuck yea' },
		{ name: 'Germany', region: 'EUW', text: 'Hamburger' }
	];
	return (
		<ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
			<Container maxWidth='sm'>
				<Typography component='div' style={{ borderRadius: '4px', height: '100vh' }}>
					{data.map((country) => <CountryCard name={country.name} region={country.region} text={country.text} />)}
				</Typography>
			</Container>
		</ThemeProvider>
	);
};

export default Countries;
