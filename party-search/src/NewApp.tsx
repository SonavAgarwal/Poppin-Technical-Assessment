import React from "react";
import NavBar from "./NavBar";
import Hero from "./Hero";

interface Props {}

const NewApp = (props: Props) => {
	return (
		<div>
			<NavBar></NavBar>
			<Hero></Hero>
		</div>
	);
};

export default NewApp;
