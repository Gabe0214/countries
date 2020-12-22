import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		flexWrap: 'wrap',
		justifyContent: 'center',
		position: 'absolute',
		top: '56px',
		left: '0px',
		zIndex: '15',

		'& > *': {
			margin: '0',
			width: '92%',
			height: '300px',
			overflowY: 'auto'
		},

		'& .MuiPaper-root': {
			backgroundColor: theme.palette.primary.main
		}
	}
}));
