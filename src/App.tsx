import React, { useState } from 'react';
import './App.css';
import TodoInput from './Component/TodoInput';
import { Typography } from '@mui/material';
import { Todo } from './Component/TodoModel';
import TodoList from './Component/TodoList';

const App: React.FC = () => {
	const [todo, setTodo] = useState<string>('');
	const [todoList, setTodoList] = useState<Todo[]>([]);

	const handleAddTodo = (e: React.FormEvent) => {
		e.preventDefault();
		if (todo) {
			setTodoList([...todoList, { id: Date.now(), todo, isDone: false }]);
			setTodo('');
		}
	};
	// const handleEditTodo = (e: React.FormEvent) => {};
	const handleDeleteTodo = (id: number) => {
		const updatedTodoList = todoList.filter((todo) => todo.id !== id);
		setTodoList(updatedTodoList);
	};
	const handleDoneTodo = (id: number) => {
		const updatedTodoList = todoList.map((todo) => {
			if (todo.id === id) {
				return { ...todo, isDone: !todo.isDone };
			}
			return todo;
		});
		setTodoList(updatedTodoList);
	};

	console.log(todoList);

	return (
		<div className='App'>
			<Typography variant='h2'>Todo App</Typography>
			<TodoInput todo={todo} setTodo={setTodo} handleAddTodo={handleAddTodo} />
			<TodoList
				todoList={todoList}
				handleDeleteTodo={handleDeleteTodo}
				handleDoneTodo={handleDoneTodo}
			/>
		</div>
	);
};

export default App;
