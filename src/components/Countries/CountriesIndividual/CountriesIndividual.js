import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Box from '@material-ui/core/Box';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';
import TrendingFlatIcon from '@material-ui/icons/TrendingFlat';
import Typography from '@material-ui/core/Typography';
import { NavLink } from 'react-router-dom';

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

		'& .MuiSvgIcon-root': {
			transform: 'rotateY(180deg)',
			marginRight: '8%',
			fill: theme.palette.text.primary
		},

		'& .MuiTypography-button': {
			fontWeight: '600'
		}
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
		<Box p={'0 25px'} m={'8% 0 0 0'} color='primary'>
			<Box margin={'8% 0 10% 0'}>
				<NavLink to='/' className={classes.back}>
					<TrendingFlatIcon />
					<Typography variant='button' component='span' className={classes.burger} color='textPrimary'>
						Back
					</Typography>
				</NavLink>
			</Box>
			<CardMedia className={classes.media} image={countryDetail.flag} title='Contemplative Reptile' />
		</Box>
	);
};

export default CountriesIndividual;
