import { useForm } from "react-hook-form";
import "./App.css";
import { useCallback, useEffect, useRef, useState } from "react";
import PartyCard from "./components/PartyCard";
import styles from "./styles/PartySearch.module.css";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { Engine } from "tsparticles-engine";
import { backgroundParticleConfig, champagneConfig, partyList } from "./config";

import MiniSearch from "minisearch";

import { debounce } from "debounce";
import { generateRandomParty } from "./utils";

type SearchData = {
	query: string;
};

const partyDatabase = new Map<number, Party>();
partyList.forEach((party) => {
	partyDatabase.set(party.id, party);
});

function App() {
	const { register, handleSubmit, watch, reset } = useForm<SearchData>();
	const onSubmit = (data: any) => console.log(data);

	const [allParties, setAllParties] = useState<Party[]>(partyList);
	const [parties, setParties] = useState<Party[]>(partyList);

	const initMiniSearch = useCallback(() => {
		let newMiniSearch = new MiniSearch({
			fields: ["name"],
			searchOptions: {
				prefix: true,
			},
		});
		newMiniSearch.addAll(partyList);
		return newMiniSearch;
	}, []);
	const miniSearch = useRef<MiniSearch<Party>>(initMiniSearch());

	const performSearch = useCallback(
		debounce((queryString: string) => {
			const results = miniSearch.current.search(queryString);
			const newParties = results.map(
				(result) => partyDatabase.get(result.id) as Party
			);
			setParties(newParties);
		}, 100),
		[]
	);

	useEffect(() => {
		const subscription = watch((query) => {
			let queryString: string = query.query as string;
			if (queryString) {
				performSearch(queryString);
			} else {
				setParties(allParties.slice());
			}
		});
		return () => subscription.unsubscribe();
	}, [watch, miniSearch.current, allParties]);

	function addParty() {
		let newParty = generateRandomParty(partyDatabase.size);

		partyDatabase.set(newParty.id, newParty);

		let newParties = [...allParties, newParty];

		miniSearch.current.add(newParty);

		setParties(newParties);
		setAllParties(newParties);
		reset({ query: "" });
	}

	const particlesInit = useCallback(async (engine: Engine) => {
		console.log(engine);
		await loadFull(engine);
	}, []);

	return (
		<div className={styles.page}>
			<Particles
				id="tsparticles"
				{...backgroundParticleConfig}
				init={particlesInit}
			/>

			<div>
				<form
					autoComplete="off"
					className={styles.form}
					onSubmit={handleSubmit(onSubmit)}
				>
					<input
						className={styles.search}
						placeholder="Search for a party..."
						{...register("query")}
					/>
					{watch("query") && (
						<button
							className={styles.clearButton}
							onClick={() => {
								reset({ query: "" });
							}}
						>
							✕
						</button>
					)}
					<Particles
						id={styles.champagne}
						{...champagneConfig}
						init={particlesInit}
					/>
				</form>
			</div>

			<div>
				{parties.map((party, index) => {
					return (
						<PartyCard key={party.id} party={party} index={index}></PartyCard>
					);
				})}
			</div>

			<button className={styles.newPartyButton} onClick={addParty}>
				New Party
			</button>
		</div>
	);
}

export default App;
