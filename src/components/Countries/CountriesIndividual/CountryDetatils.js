import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
export const CountryDetatils = ({ nativeName, population, region, subRegion, capital, toplvlDomain, currencies }) => {
	return (
		<div>
			<Box>
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
			<Box>
				<ListItem>
					<Typography variant='subtitle1'>Top Level Domain: </Typography>
					<ListItemText primary={toplvlDomain} />
				</ListItem>
				<ListItem>
					<Typography variant='subtitle1'>Currencies:</Typography>
					{currencies.length == 0 ? (
						<ListItemText primary={currencies[0].name} />
					) : (
						currencies.map((currency, i) => {
							if (i + 1 == currencies.length) {
								return <ListItemText key={currency.name} primary={currency.name} />;
							}
							return <ListItemText style={{ whiteSpace: 'pre' }} primary={`${currency.name}, `} key={currency.name} />;
						})
					)}
				</ListItem>
			</Box>
		</div>
	);
};
