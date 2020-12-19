import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
	root: {
		'& > *': {
			margin: `${theme.spacing(2)}px 0px`,
			padding: '0 5px'
		},

		'& .MuiPagination-ul': {
			flexWrap: 'nowrap',
			justifyContent: 'space-between',

			'& .MuiPaginationItem-root': {
				padding: '0',
				margin: '0'
			}
		}
	}
}));
