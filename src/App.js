import React, { Fragment } from "react";
import Router from "./router/Router";
import Header from "./components/Header";

const App = () => {
	return (
		<Fragment>
			<Header />
			<Router />
		</Fragment>
	);
};

export default App;
