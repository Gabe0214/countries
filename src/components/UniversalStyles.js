import { createMuiTheme } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
	filterSearchBox: {
		display: 'flex',
		justifyContent: 'space-between',
		[theme.breakpoints.up('lg')]: {
			maxWidth: theme.breakpoints.values.lg,
			margin: '3% auto'
		}
	}
}));

export const lightTheme = createMuiTheme({
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
				},

				'&:hover': {
					'&:before': {
						borderBottom: 'none'
					}
				}
			}
		}
	}
});

export const darkTheme = createMuiTheme({
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
				},
				'&:hover': {
					'&:before': {
						borderBottom: 'none'
					}
				}
			}
		},
		MuiInputBase: {
			input: {
				'&::placeholder': {
					opacity: '1'
				}
			}
		}
	}
});
