import { Box, Button, TextField } from '@mui/material';
import React from 'react';
import { useStyles } from './TodoInput.style';

interface Props {
	todo: string;
	setTodo: React.Dispatch<React.SetStateAction<string>>;
	handleAddTodo: (e: React.FormEvent) => void; // not going to return anything here
}

const TodoInput = ({ todo, setTodo, handleAddTodo }: Props) => {
	const className = useStyles();
	return (
		<div className={className.root}>
			<Box
				sx={{
					width: 500,
					maxWidth: '100%',
				}}>
				<TextField
					fullWidth
					label='Todo'
					id='Todo'
					value={todo}
					onChange={(e) => setTodo(e.target.value)}
				/>
				<Button variant='contained' onClick={handleAddTodo}>
					Add
				</Button>
			</Box>{' '}
		</div>
	);
};

export default TodoInput;
