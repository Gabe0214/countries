import { makeStyles } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
	formControl: {
		margin: '5% 0 8% 0',
		width: '25%',
		[theme.breakpoints.up('sm')]: {
			width: '50%'
		},
		padding: '0 16px 0 16px',
		[theme.breakpoints.up('sm')]: {
			padding: '0 24px 0 24px'
		},
		[theme.breakpoints.up('lg')]: {
			padding: '0',
			margin: '0'
		}
	}
}));
const breakPoints = createMuiTheme();
export const selectThemeLight = createMuiTheme({
	overrides: {
		MuiSelect: {
			filled: {
				padding: '1rem 2rem 1rem 0.8rem !important',
				boxShadow: '0px 3px 3px -2px rgba(0,0,0,0.2),0px 3px 4px 0px rgba(0,0,0,0.14),0px 1px 8px 0px rgba(0,0,0,0.12)',
				borderRadius: '4px'
			}
		},
		MuiFilledInput: {
			root: {
				backgroundColor: '#fff'
			},
			underline: {
				borderBottom: 'none',

				'&:after': {
					borderBottom: 'none'
				},

				'&:before': {
					borderBottom: 'none'
				},
				'&:hover': {
					'&:before': {
						borderBottom: 'none'
					}
				}
			},
			input: {
				borderRadius: '4px'
			}
		},
		MuiPopover: {
			paper: {
				top: '243px !important',
				[breakPoints.breakpoints.up('sm')]: {
					top: '301px !important'
				},

				[breakPoints.breakpoints.up('lg')]: {
					top: '192px !important'
				}
			}
		},

		MuiMenuItem: {
			root: {
				minHeight: '0px'
			}
		}
	},
	palette: {
		primary: {
			main: '#fff'
		}
	},
	text: {
		primary: '#111517'
	}
});

export const selectThemeDark = createMuiTheme({
	overrides: {
		MuiSelect: {
			filled: {
				padding: '1rem 2rem 1rem 0.8rem !important',
				boxShadow: '0px 3px 3px -2px rgba(0,0,0,0.2),0px 3px 4px 0px rgba(0,0,0,0.14),0px 1px 8px 0px rgba(0,0,0,0.12)',
				borderRadius: '4px'
			},
			icon: {
				color: '#fff'
			},

			selectMenu: {
				borderRadius: '4px'
			}
		},
		MuiFilledInput: {
			root: {
				backgroundColor: '#2b3945'
			},
			underline: {
				borderBottom: 'none',
				borderRadius: '4px',

				'&:after': {
					borderBottom: 'none'
				},

				'&:before': {
					borderBottom: 'none'
				},
				'&:hover': {
					'&:before': {
						borderBottom: 'none'
					}
				}
			},
			input: {
				borderRadius: '4px'
			}
		},
		MuiPopover: {
			paper: {
				top: '243px !important',
				backgroundColor: '#2b3945',

				[breakPoints.breakpoints.up('sm')]: {
					top: '301px !important'
				},

				[breakPoints.breakpoints.up('lg')]: {
					top: '192px !important'
				}
			}
		},

		MuiMenuItem: {
			root: {
				minHeight: '0px'
			}
		}
	},
	palette: {
		primary: {
			main: '#2b3945'
		},

		text: {
			primary: '#fff'
		}
	}
});
