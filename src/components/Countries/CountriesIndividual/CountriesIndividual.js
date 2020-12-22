import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Box from '@material-ui/core/Box';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';
import TrendingFlatIcon from '@material-ui/icons/TrendingFlat';
import Typography from '@material-ui/core/Typography';
import { NavLink } from 'react-router-dom';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { CountryDetatils } from './CountryDetatils';

const useStyles = makeStyles((theme) => ({
	media: {
		height: 220
	},
	back: {
		display: 'flex',
		alignItems: 'center',
		backgroundColor: theme.palette.primary.main,
		width: '35%',
		padding: '7px 0px',
		boxShadow: '0px 3px 3px -2px rgba(0,0,0,0.2),0px 3px 4px 0px rgba(0,0,0,0.14),0px 1px 8px 0px rgba(0,0,0,0.12)',
		textDecoration: 'none',
		justifyContent: 'center',
		color: theme.palette.text.primary,

		'& .MuiSvgIcon-root': {
			transform: 'rotateY(180deg)',
			marginRight: '8%',
			fill: theme.palette.text.primary
		},

		'& .MuiTypography-button': {
			fontWeight: '600'
		}
	},
	listContainer: {
		'& .MuiList-root': {
			paddingTop: '0',
			paddingBottom: '0'
		},

		'& .MuiListItem-gutters': {
			paddingLeft: '0',
			paddingRight: '0',
			paddingBottom: '0',
			paddingTop: '0'
		},

		'& .MuiTypography-subtitle1': {
			fontWeight: '600',
			marginRight: '2%'
		},

		'& .MuiListItemText-root': {
			flex: 'none',
			marginTop: '0',
			marginBottom: '0',
			fontSize: '0.8rem !important'
		},

		'& .MuiTypography-body1': {
			fontSize: '0.9rem'
		},

		'& .MuiBox-root': {
			marginTop: '8%'
		}
	},
	btnBox: {
		margin: '5% 0 6% 0 '
	}
}));

const CountriesIndividual = (props) => {
	const [ countryDetail, setCountryDetail ] = useState({});

	const { match } = props;
	const name = match.params.name;

	const classes = useStyles();

	useEffect(() => {
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
	}, []);

	// const keys = countryDetail.length > 0 ? Object.keys(countryDetail && countryDetail[0]) : null;
	// // console.log(keys[16]);
	// console.log(keys);
	// console.log(countryDetail);
	// console.log(countryDetail[keys[16]]);

	if (Object.keys(countryDetail).length == 0) {
		return <h2>Loading...</h2>;
	}
	console.log(countryDetail.currencies);
	return (
		<Box p={'0 25px'} m={'8% 0 0 0'} color='primary'>
			<Box margin={'8% 0 10% 0'}>
				<NavLink to='/' className={classes.back}>
					<TrendingFlatIcon />
					<Typography variant='button' component='span' className={classes.burger} color='textPrimary'>
						Back
					</Typography>
				</NavLink>
			</Box>
			<Box>
				<Box m={'0 0 15% 0'}>
					<CardMedia className={classes.media} image={countryDetail !== {} ? `${countryDetail.flag}` : null} />
				</Box>
				<Box>
					<Box>
						<Typography variant='h5'>{countryDetail.name}</Typography>
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
							/>

							{/* // ))} */}
						</List>
					</Box>
				</Box>
			</Box>
		</Box>
	);
};

export default CountriesIndividual;
