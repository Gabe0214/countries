import React from 'react';
import { useStyles } from './CountryCardStyles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const CountryCard = ({ name, text, region }) => {
	const classes = useStyles();
	return (
		<Card className={classes.root}>
			<CardActionArea>
				<CardMedia
					className={classes.media}
					image='https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=1200:*'
					title='Contemplative Reptile'
				/>
				<CardContent>
					<Typography gutterBottom variant='h5' component='h2'>
						{name}
					</Typography>
					<Typography variant='body2' color='textSecondary' component='p' color='textPrimary'>
						{text}
					</Typography>
					<Typography variant='body2' color='textSecondary' component='p' color='textPrimary'>
						{region}
					</Typography>
				</CardContent>
			</CardActionArea>
			<CardActions>
				<Button size='small' color='textPrimary'>
					Share
				</Button>
				<Button size='small' color='textPrimary'>
					Learn More
				</Button>
			</CardActions>
		</Card>
	);
};

export default CountryCard;
