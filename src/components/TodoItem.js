import React from "react";
import PropTypes from "prop-types";

// this is a stateless, functional component.
// this is the future of react
export default function TodoItem({ id, text, removeToDo }) {
	return <li onClick={() => removeToDo(id)}>{text}</li>;
}

TodoItem.propTypes = {
	id: PropTypes.number,
	text: PropTypes.string,
	removeToDo: PropTypes.func
};
