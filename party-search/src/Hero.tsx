import React from "react";
import backgroundImage from "./assets/Group 3121.png";

import styles from "./Hero.module.css";

interface Props {}

const Hero = (props: Props) => {
	return (
		<div className={styles.container}>
			<div className={styles.backOverlay}>
				<img src={backgroundImage}></img>
			</div>
			<div className={styles.frontOverlayContainer}>
				<div className={styles.frontOverlay}>
					<h1>Connect With Others.</h1>
					<p>
						We’re bring social back to social media. Lorem ipsum dolor sit amet,
						consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
						labore et dolore magna aliqua.
					</p>

					<button className={styles.button}>Download</button>
				</div>
			</div>
		</div>
	);
};

export default Hero;
