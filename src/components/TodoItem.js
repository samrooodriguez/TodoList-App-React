import React from "react";

// this is a stateless, functional component.
// this is the future of react
export default ({ id, text, removeToDo }) => (
	<li onClick={() => removeToDo(id)}>{text}</li>
);
