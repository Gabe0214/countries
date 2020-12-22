import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
	root: {
		'& > *': {
			width: '100%',
			[theme.breakpoints.up('sm')]: {
				width: '69%'
			}
		},
		position: 'relative',
		padding: '0 16px 0 16px',
		[theme.breakpoints.up('sm')]: {
			padding: '0 24px 0 24px'
		},
		marginTop: '10%'
	}
}));
