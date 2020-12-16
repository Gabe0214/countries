import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1
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
		cursor: 'pointer'
	}
}));
