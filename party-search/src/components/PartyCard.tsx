import React, { useEffect, useState } from "react";

import styles from "../styles/PartyCard.module.css";
import classNames from "classnames";
import AnimateHeight, { Height } from "react-animate-height";
import { formatDate } from "../utils";

interface PartyProps {
	party: Party;
	index: number;
}

const PartyCard = ({ party, index }: PartyProps) => {
	const [height, setHeight] = useState<Height>(0);
	useEffect(() => {
		setHeight("auto");
		return () => {
			setHeight(0);
		};
	}, []);

	return (
		<AnimateHeight height={height}>
			<div
				className={classNames(
					styles.card,
					index % 2 == 0 ? styles.directionRight : styles.directionLeft
				)}
			>
				<div className={styles.imageContainer}>
					<img className={styles.image} src={party.banner.toString()} />
					<div className={styles.nameContainer}>
						<div className={styles.name}>
							<h1>{party.name}</h1>
						</div>
					</div>
				</div>
				<div className={styles.infoContainer}>
					<span className={styles.price}>${party.price}</span>{" "}
					<span className={styles.date}>{formatDate(party.startDate)}</span>
				</div>
			</div>
		</AnimateHeight>
	);
};

export default PartyCard;
