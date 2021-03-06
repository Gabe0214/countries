import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { NavLink } from 'react-router-dom';
export const CountryDetatils = ({
	nativeName,
	population,
	region,
	subRegion,
	capital,
	toplvlDomain,
	currencies,
	languages,
	classes,
	borderCountries
}) => {
	return (
		<div className={classes.countryDetailsContainer}>
			<Box className={classes.boxContentText}>
				<ListItem>
					<Typography variant='subtitle1'>Native Name:</Typography>
					<ListItemText primary={nativeName} />
				</ListItem>
				<ListItem>
					<Typography variant='subtitle1'>Population:</Typography>
					<ListItemText primary={population} />
				</ListItem>
				<ListItem>
					<Typography variant='subtitle1'>Region:</Typography>
					<ListItemText primary={region} />
				</ListItem>
				<ListItem>
					<Typography variant='subtitle1'>Sub Region:</Typography>
					<ListItemText primary={subRegion} />
				</ListItem>
				<ListItem>
					<Typography variant='subtitle1'>Capital:</Typography>
					<ListItemText primary={capital} />
				</ListItem>
			</Box>
			<Box className={classes.boxContentText}>
				<ListItem>
					<Typography variant='subtitle1'>Top Level Domain: </Typography>
					<ListItemText primary={toplvlDomain} />
				</ListItem>
				<ListItem>
					<Typography variant='subtitle1'>Currencies:</Typography>
					{currencies.length == 1 ? (
						<ListItemText primary={currencies[0].name} />
					) : (
						currencies.map((currency, i) => {
							return i + 1 == currencies.length ? (
								<ListItemText key={currency.name} primary={currency.name} />
							) : (
								<ListItemText style={{ whiteSpace: 'pre' }} primary={`${currency.name}, `} key={currency.name} />
							);
						})
					)}
				</ListItem>
				<ListItem>
					<Typography variant='subtitle1'>Languagies:</Typography>
					{languages.length == 1 ? (
						<ListItemText primary={languages[0].name} />
					) : (
						languages.map((language, i) => {
							return i + 1 == languages.length ? (
								<ListItemText key={language.name} primary={language.name} />
							) : (
								<ListItemText style={{ whiteSpace: 'pre' }} primary={`${language.name}, `} key={language.name} />
							);
						})
					)}
				</ListItem>
			</Box>
			<Box className={classes.borderSection}>
				<Typography variant='subtitle1' classes={{ root: classes.title }}>
					Border Countries:
				</Typography>
				<div className={classes.btnBox}>
					{borderCountries.slice(0, 3).map((country) => (
						<NavLink key={country} className={`${classes.back} ${classes.borderLinks}`} to={`/country/${country}`}>
							{country}
						</NavLink>
					))}
				</div>
			</Box>
		</div>
	);
};
