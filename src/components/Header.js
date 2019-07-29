import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
	return (
		<div>
			<header className="header">
				<Link to="/">Home</Link>
				<Link to="/class">Class</Link>
				<Link to="/hook">Hook</Link>
			</header>
		</div>
	);
};

export default Header;
