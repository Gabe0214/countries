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
	}
});
