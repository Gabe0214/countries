import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Box from '@material-ui/core/Box';
import CardMedia from '@material-ui/core/CardMedia';
import { useStyles } from './CountriesIndividualStyles/CountriesIndividualStyles';
import TrendingFlatIcon from '@material-ui/icons/TrendingFlat';
import Typography from '@material-ui/core/Typography';
import { NavLink } from 'react-router-dom';
import List from '@material-ui/core/List';
import { CountryDetatils } from './CountryDetatils';

const CountriesIndividual = (props) => {
	const [ countryDetail, setCountryDetail ] = useState({});

	const { match } = props;
	const name = match.params.name;

	const classes = useStyles();

	useEffect(
		() => {
			const fetchCountry = async () => {
				try {
					const res = await axios.get(`https://restcountries.eu/rest/v2/alpha/${name}`);
					const data = res.data;
					setCountryDetail(data);
				} catch (err) {
					console.log(err);
				}
			};

			fetchCountry();
		},
		[ name ]
	);

	if (Object.keys(countryDetail).length == 0) {
		return <h2>Loading...</h2>;
	}
	console.log(countryDetail);
	return (
		<Box p={'0 25px'} m={'8% 0 0 0'} color='primary'>
			<Box margin={'8% 0 10% 0'} className={classes.backBtnContainer}>
				<NavLink to='/' className={classes.back}>
					<TrendingFlatIcon />
					<Typography variant='button' component='span' className={classes.burger} color='textPrimary'>
						Back
					</Typography>
				</NavLink>
			</Box>
			<Box>
				<Box m={'0 0 15% 0'} className={classes.imgContainer}>
					<CardMedia className={classes.media} image={countryDetail !== {} ? `${countryDetail.flag}` : null} />
				</Box>
				<Box>
					<Box>
						<Typography variant='h5' classes={{ root: classes.title }}>
							{countryDetail.name}
						</Typography>
					</Box>
					<Box className={classes.listContainer}>
						<List>
							{/* {countryDetail.map((country) => ( */}

							<CountryDetatils
								region={countryDetail.region}
								nativeName={countryDetail.nativeName}
								population={countryDetail.population}
								subRegion={countryDetail.subregion}
								capital={countryDetail.capital}
								toplvlDomain={countryDetail.topLevelDomain[0]}
								languages={countryDetail.languages}
								classes={classes}
								currencies={countryDetail.currencies}
								borderCountries={countryDetail.borders}
							/>
						</List>
					</Box>
				</Box>
			</Box>
		</Box>
	);
};

export default CountriesIndividual;
