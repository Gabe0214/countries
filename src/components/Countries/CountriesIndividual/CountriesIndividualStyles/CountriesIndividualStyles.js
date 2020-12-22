import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
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
		marginRight: '3%',

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
		margin: '5% 0 6% 0 ',
		display: 'flex'
	}
}));
