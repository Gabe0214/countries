import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
	root: {
		'& > *': {
			width: '100%',
			[theme.breakpoints.up('sm')]: {
				width: '68%'
			},
			[theme.breakpoints.up('lg')]: {
				width: '100%'
			}
		},
		position: 'relative',
		padding: '0 16px 0 16px',
		marginTop: '10%',
		[theme.breakpoints.up('sm')]: {
			padding: '0 24px 0 24px'
		},

		[theme.breakpoints.up('lg')]: {
			margin: '0',
			padding: 0,
			width: '33%'
		}
	},
	icon: {
		position: 'absolute',
		top: '17px',
		left: '32px',
		[theme.breakpoints.up('sm')]: {
			left: '41px'
		},
		[theme.breakpoints.up('lg')]: {
			left: '25px'
		}
	}
}));
