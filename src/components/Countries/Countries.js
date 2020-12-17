import React from 'react';
import { formatMs, makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { darkTheme, lightTheme } from '../UniversalStyles';
import { ThemeProvider } from '@material-ui/core/styles';
const useStyles = makeStyles({
	root: {
		maxWidth: 345
	},
	media: {
		height: 180
	}
});

const Countries = ({ countries, darkMode }) => {
	const classes = useStyles();
	return (
		<ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
			<CssBaseline />
			<Container maxWidth='sm'>
				<Typography component='div' style={{ borderRadius: '4px', height: '100vh' }}>
					<Card className={classes.root}>
						<CardActionArea>
							<CardMedia
								className={classes.media}
								image='https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=1200:*'
								title='Contemplative Reptile'
							/>
							<CardContent>
								<Typography gutterBottom variant='h5' component='h2'>
									Lizard
								</Typography>
								<Typography variant='body2' color='textSecondary' component='p'>
									Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all
									continents except Antarctica
								</Typography>
							</CardContent>
						</CardActionArea>
						<CardActions>
							<Button size='small' color='primary'>
								Share
							</Button>
							<Button size='small' color='primary'>
								Learn More
							</Button>
						</CardActions>
					</Card>
				</Typography>
			</Container>
		</ThemeProvider>
	);
};

export default Countries;
