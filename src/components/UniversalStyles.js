import { createMuiTheme } from '@material-ui/core';

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
				borderTopLeftRadius: '0',
				borderTopRightRadius: '0'
			},
			input: {
				fontWeight: 600,
				padding: '1rem 3rem',
				boxShadow: '0px 3px 3px -2px rgba(0,0,0,0.2),0px 3px 4px 0px rgba(0,0,0,0.14),0px 1px 8px 0px rgba(0,0,0,0.12)'
			},
			underline: {
				'&:after': {
					borderBottom: '0'
				},
				'&:before': {
					borderBottom: '0'
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
				borderTopLeftRadius: '0',
				borderTopRightRadius: '0'
			},
			input: {
				fontWeight: 600,
				padding: '1rem 3rem',
				boxShadow: '0px 3px 3px -2px rgba(0,0,0,0.2),0px 3px 4px 0px rgba(0,0,0,0.14),0px 1px 8px 0px rgba(0,0,0,0.12)'
			},
			underline: {
				'&:after': {
					borderBottom: '0'
				},
				'&:before': {
					borderBottom: '0'
				}
			}
		}
	}
});
