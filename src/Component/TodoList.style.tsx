import { Theme } from '@mui/material';
import { green } from '@mui/material/colors';
import { makeStyles } from '@mui/styles';
export const useStyles = makeStyles((theme: Theme) => ({
	root: {
		'& .MuiPaper-root': {
			margin: '10px',
			display: 'flex',
		},
		'& .MuiCardContent-root': {
			flexGrow: 1,
		},
	},
	success: {
		border: '3px solid #5cb85c	',
	},
	complete: {
		textDecoration: 'line-through',
	},
	pending: {
		border: '3px solid orange	',
	},
}));
