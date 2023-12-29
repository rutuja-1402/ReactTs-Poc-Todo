import React from 'react';
import { Todo } from './TodoModel';
import { useStyles } from './TodoList.style';
import { Box, Card, CardActions, CardContent, Typography } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckIcon from '@mui/icons-material/Check';

interface Props {
	todoList: Todo[];
	handleDeleteTodo: (id: number) => void;
	handleDoneTodo: (id: number) => void;
}

const TodoList = ({ todoList, handleDeleteTodo, handleDoneTodo }: Props) => {
	const className = useStyles();
	return (
		<div className={className.root}>
			{todoList.map((data: Todo) => {
				return (
					<Box>
						<Card
							className={data.isDone ? className.success : className.pending}
							sx={{ minWidth: 500 }}
							key={data.id}>
							<CardContent>
								<Typography
									className={data.isDone ? className.complete : ''}
									variant='h5'
									component='div'>
									{data.todo}
								</Typography>
							</CardContent>
							<CardActions>
								{/* <EditIcon /> */}
								<DeleteIcon onClick={() => handleDeleteTodo(data.id)} />
								<CheckIcon onClick={() => handleDoneTodo(data.id)} />
							</CardActions>
						</Card>
					</Box>
				);
			})}
		</div>
	);
};

export default TodoList;
