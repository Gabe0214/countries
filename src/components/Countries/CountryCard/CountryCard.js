import React from 'react';
import { useStyles } from './CountryCardStyles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useHistory } from 'react-router-dom';
const CountryCard = ({ name, population, region, flag, capital, alphaCode }) => {
	let history = useHistory();
	const classes = useStyles();
	return (
		<Card className={classes.root} onClick={() => history.push(`/country/${alphaCode}`)}>
			<CardActionArea>
				<CardMedia className={classes.media} image={flag} title='Contemplative Reptile' />
				<CardContent>
					<Typography gutterBottom variant='h5' component='h2'>
						{name}
					</Typography>
					<Typography variant='body2' color='textSecondary' component='p' color='textPrimary'>
						Population: <Typography component='span'>{population}</Typography>
					</Typography>
					<Typography variant='body2' color='textSecondary' component='p' color='textPrimary'>
						Region: {region}
					</Typography>
					<Typography variant='body2' color='textSecondary' component='p' color='textPrimary'>
						Capital: {capital}
					</Typography>
				</CardContent>
			</CardActionArea>
			<CardActions>
				<Button size='small' color='textPrimary' onClick={() => history.push(`/country/${alphaCode}`)}>
					Learn More
				</Button>
			</CardActions>
		</Card>
	);
};

export default CountryCard;
