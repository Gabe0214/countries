import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,

		'& .MuiToolbar-root': {
			[theme.breakpoints.up('lg')]: {
				justifyContent: 'space-between',
				width: '100%',
				margin: '0 auto',
				maxWidth: theme.breakpoints.values.lg,
				paddingLeft: '0',
				paddingRight: '0'
			}
		}
	},
	title: {
		flexGrow: 1,
		fontWeight: '800'
	},
	fontI: {
		marginRight: '8px'
	},
	toolbar: {
		minHeight: '80px'
	},
	iconContainer: {
		cursor: 'pointer',
		[theme.breakpoints.up('lg')]: {
			fontSize: '1.2rem'
		}
	}
}));
