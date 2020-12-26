import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
	contentContainer: {
		[theme.breakpoints.up('lg')]: {
			display: 'flex',
			margin: '0 auto',
			maxWidth: theme.breakpoints.values.lg
		}
	},

	imgContainer: {
		[theme.breakpoints.up('sm')]: {
			marginBottom: '3%',
			display: 'flex',
			justifyContent: 'center'
		},

		[theme.breakpoints.up('lg')]: {
			marginRight: '6%',
			justifyContent: 'flex-start'
		}
	},
	media: {
		height: 168,
		[theme.breakpoints.up('sm')]: {
			width: '73%',
			height: '259px'
		},
		[theme.breakpoints.up('lg')]: {
			width: '500px',
			height: '374px'
		}
	},

	textContainer: {
		[theme.breakpoints.up('lg')]: {
			width: '100%'
		}
	},
	title: {
		[theme.breakpoints.up('sm')]: {
			textAlign: 'center'
		},
		[theme.breakpoints.up('lg')]: {
			textAlign: 'left',
			display: 'inline-block'
		}
	},

	countryDetailsContainer: {
		[theme.breakpoints.up('lg')]: {
			display: 'flex',
			justifyContent: 'space-between',
			flexWrap: 'wrap'
		}
	},

	boxContentText: {
		[theme.breakpoints.up('lg')]: {
			marginTop: '5%',
			width: '36%'
		}
	},

	borderSection: {
		[theme.breakpoints.up('lg')]: {
			width: '100%'
		}
	},

	btnBox: {
		margin: '5% 0 6% 0 ',
		display: 'flex',
		[theme.breakpoints.up('sm')]: {
			justifyContent: 'center'
		},
		[theme.breakpoints.up('lg')]: {
			display: 'inline-block',
			width: '79%'
		}
	},
	backBtnContainer: {
		[theme.breakpoints.up('sm')]: {
			display: 'flex',
			justifyContent: 'center',
			margin: '4% 0'
		},

		[theme.breakpoints.up('lg')]: {
			justifyContent: 'flex-start',
			maxWidth: '1280px',
			margin: '4% auto'
		}
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

		[theme.breakpoints.up('sm')]: {
			width: '19%'
		},

		[theme.breakpoints.up('lg')]: {
			width: '10%'
		},

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
			paddingTop: '0',
			[theme.breakpoints.up('sm')]: {
				justifyContent: 'center'
			},
			[theme.breakpoints.up('lg')]: {
				justifyContent: 'flex-start',
				marginBottom: '2%'
			}
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
			marginTop: '8%',
			[theme.breakpoints.up('sm')]: {
				marginTop: '2%'
			}
		}
	},
	borderLinks: {
		[theme.breakpoints.up('lg')]: {
			width: '22% ',
			display: 'inline-block',
			textAlign: 'center',
			marginRight: '3%'
		}
	}
}));
