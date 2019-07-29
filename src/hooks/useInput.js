import { useState } from "react";

export default function useInput(initialValue) {
	// uses the setState hook for the control of the value
	const [value, setValue] = useState(initialValue);
	// returns an object with all the necessary pieces to manage input in React
	return {
		// the actual value of the input
		value,
		// the way to change it
		setValue,
		// turning it back to ""
		reset: () => setValue(""),
		bind: {
			value,
			onChange: event => {
				setValue(event.target.value);
			}
		}
	};
}
