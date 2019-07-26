import React from "react";
import ReactDOM from "react-dom";
import "./css/index.css";
import TodoList from "./TodoList";

let destination = document.querySelector("#container");

ReactDOM.render(
	<div>
		<TodoList />
	</div>,
	destination
);
