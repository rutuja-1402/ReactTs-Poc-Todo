import { Theme } from '@mui/material';
import { green } from '@mui/material/colors';
import { makeStyles } from '@mui/styles';
export const useStyles = makeStyles((theme: Theme) => ({
	root: {
		'& .MuiBox-root': {
			paddingTop: '50px',
			display: 'flex',
			gap: '10px',
		},
		'& .MuiInputBase-input': {
			backgroundColor: 'white',
			borderRadius: '5px',
		},
		'& .MuiButton-contained': {
			backgroundColor: green[500],
			fontSize: '16px',
			'&:hover': {
				backgroundColor: green[700],
			},
		},
	},
}));
