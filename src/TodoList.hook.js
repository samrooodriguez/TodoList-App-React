import React, { useState } from "react";
import TodoItem from "./components/TodoItem";
import "./css/TodoList.css";

const addItem = event => {
  // So here you were using a reference to a dom element. This is not a common practice, but it's not bad.
  // This is just an alternative.
  event.preventDefault();
  if (this.state.todoName !== "") {
    this.setState(prevState => ({
      items: prevState.items.concat({
        text: prevState.todoName,
        id: Math.floor(Math.random() * 1000)
      })
    }));
  }
};

const inputHandler = type => event => {
  this.setState({
    [type]: event.target.value
  });
};

const removeToDo = id => {
  const filteredItems = this.state.items.filter(item => {
    return item.id !== id;
  });

  this.setState({
    items: filteredItems
  });
};

export default () => {
	// you don't need a constructor here
	// constructor here is just for getting methods from extending classes
	state = {
		items: [],
		todoName: ""
	};
	
		return (
			<div className="todoListMain">
				<div className="header">
					<form>
						<input
							// input state values have to be handled by an onChange function ( usually )
							onChange={this.inputHandler("todoName")}
							id="todo-input"
							placeholder="Enter Task"
						/>
						<button onClick={this.addItem}>Add</button>
					</form>
				</div>
				<div>
					<ul className="theList">
						{this.state.items.map((item, index) => (
							// So components are usually just singular entities. Like a single <li>.
							<TodoItem {...item} key={index} removeToDo={this.removeToDo} />
						))}
					</ul>
				</div>
			</div>
		);
	}
}

export default TodoList;
