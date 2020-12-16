import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
	root: {
		'& > *': {
			width: '100%'
		},
		position: 'relative',
		padding: '0 16px 0 16px'
	}
}));
