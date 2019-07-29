import React from "react";
import { Switch, Route } from "react-router-dom";
import TodoList from "../views/TodoList";
import TodoListHook from "../views/TodoList.hook";
import Entry from "../views/Entry";

const Router = () => (
	<Switch>
		<Route path="/class" component={TodoList} />
		<Route path="/hook" component={TodoListHook} />
		<Route path="/" component={Entry} />
	</Switch>
);

export default Router;
