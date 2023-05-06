import React from "react";
import styles from "./NavBar.module.css";
import PoppinLogo from "./assets/Border=logoGradient.png";

interface Props {}

const NavBar = (props: Props) => {
	return (
		<div className={styles.container}>
			<div className={styles.logoContainer}>
				<h1 className={styles.logo}>poppin</h1>
			</div>
			<div style={{ flex: 1 }}></div>
			<a className={styles.link} href="https://google.com">
				<h1>Browse Events</h1>
			</a>
			<a className={styles.link} href="https://google.com">
				<h1>Join</h1>
			</a>
			<a className={styles.link} href="https://google.com">
				<h1>About</h1>
			</a>
			<a href="https://google.com">
				<div className={styles.download}>
					<h1>Download</h1>
					<img src={PoppinLogo}></img>
				</div>
			</a>
		</div>
	);
};

export default NavBar;
