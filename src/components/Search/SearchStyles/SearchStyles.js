import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
	root: {
		'& > *': {
			width: '100%',
			[theme.breakpoints.up('sm')]: {
				width: '68%'
			}
		},
		position: 'relative',
		padding: '0 16px 0 16px',
		[theme.breakpoints.up('sm')]: {
			padding: '0 24px 0 24px'
		},
		marginTop: '10%'
	},
	icon: {
		position: 'absolute',
		top: '17px',
		left: '32px',
		[theme.breakpoints.up('sm')]: {
			left: '41px'
		}
	}
}));
