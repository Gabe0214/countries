import { makeStyles, createMuiTheme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
	root: {
		maxWidth: 345,
		marginBottom: '8%',
		[theme.breakpoints.up('sm')]: {
			width: '46%'
		}
	},
	media: {
		height: 188
	},

	container: {
		[theme.breakpoints.up('xs')]: {
			maxWidth: '600px'
		},
		[theme.breakpoints.up('sm')]: {
			maxWidth: '718px',
			display: 'flex',
			justifyContent: 'space-between',
			flexWrap: 'wrap',
			paddingLeft: 0,
			paddingRight: 0
		},
		[theme.breakpoints.up('lg')]: {
			maxWidth: theme.breakpoints.values.lg,
			padding: '0'
		}
	}
}));

export const cardLight = createMuiTheme({
	palette: {
		background: {
			default: '#fafafa'
		},
		primary: {
			main: '#fff'
		},
		text: {
			primary: '#111517'
		}
	},
	typography: {
		fontFamily: 'Nunito'
	},
	overrides: {
		MuiFilledInput: {
			root: {
				backgroundColor: '#fff',
				borderRadius: '4px'
			},
			input: {
				fontWeight: 600,
				padding: '1rem 3rem',
				boxShadow: '0px 3px 3px -2px rgba(0,0,0,0.2),0px 3px 4px 0px rgba(0,0,0,0.14),0px 1px 8px 0px rgba(0,0,0,0.12)',
				borderRadius: '4px'
			},
			underline: {
				'&:after': {
					borderBottom: '0'
				},
				'&:before': {
					borderBottom: '0'
				}
			}
		},
		MuiCard: {
			root: {
				backgroundColor: '#fff'
			}
		}
	}
});

export const cardDark = createMuiTheme({
	palette: {
		background: {
			default: '#202c37'
		},
		primary: {
			main: '#2b3945'
		},
		text: {
			primary: '#fff'
		}
	},
	typography: {
		fontFamily: 'Nunito'
	},
	overrides: {
		MuiFilledInput: {
			root: {
				backgroundColor: '#2b3945',
				borderRadius: '4px'
			},
			input: {
				fontWeight: 600,
				padding: '1rem 3rem',
				boxShadow: '0px 3px 3px -2px rgba(0,0,0,0.2),0px 3px 4px 0px rgba(0,0,0,0.14),0px 1px 8px 0px rgba(0,0,0,0.12)',
				borderRadius: '4px'
			},
			underline: {
				'&:after': {
					borderBottom: '0'
				},
				'&:before': {
					borderBottom: '0'
				}
			}
		},
		MuiInputBase: {
			input: {
				'&::placeholder': {
					opacity: '1'
				}
			}
		},
		MuiCard: {
			root: {
				backgroundColor: '#2b3945'
			}
		}
	}
});
