import React, { useState } from "react";
import TodoItem from "../components/TodoItem";
import useInput from "../hooks/useInput";
import "../css/TodoList.css";

export default () => {
	const { value: toDo, reset: resetTodo, bind: bindToDo } = useInput("");
	const [toDos, setToDos] = useState([]);
	const [autoFocus, setAutoFocus] = useState(false);

	const addItem = event => {
		// So here you were using a reference to a dom element. This is not a common practice, but it's not bad.
		// This is just an alternative.
		event.preventDefault();
		if (toDo !== "") {
			setToDos([
				...toDos,
				{
					text: toDo,
					id: Math.floor(Math.random() * 1000)
				}
			]);
			resetTodo();
		}
	};

	const removeToDo = id => {
		const filteredItems = toDos.filter(toDo => {
			return toDo.id !== id;
		});

		setToDos(filteredItems);
		resetTodo();
	};
	return (
		<div className="todoListMain">
			<div className="header">
				<form>
					<input
						// input state values have to be handled by an onChange function ( usually )
						{...bindToDo}
						id="todo-input"
						placeholder="Enter Task"
						autoFocus={autoFocus}
					/>
					<button type="submit" onClick={addItem}>
						Add
					</button>
				</form>
			</div>
			<div>
				<ul className="theList">
					{toDos.map((item, index) => (
						// So components are usually just singular entities. Like a single <li>.
						<TodoItem {...item} key={index} removeToDo={removeToDo} />
					))}
				</ul>
			</div>
		</div>
	);
};
