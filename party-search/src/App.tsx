import { useForm } from "react-hook-form";
import "./App.css";
import { useCallback, useEffect, useRef, useState } from "react";
import PartyCard from "./components/PartyCard";
import styles from "./styles/PartySearch.module.css";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { Engine } from "tsparticles-engine";
import { backgroundParticleConfig, champagneConfig } from "./config";

import MiniSearch, { Query } from "minisearch";

import { debounce } from "debounce";
import { generateRandomParty, getRandomBannerUrl } from "./utils";

function sleep(ms: number) {
	return new Promise((resolve) => setTimeout(resolve, ms));
}

type SearchData = {
	query: string;
};

const partyList: Party[] = [
	{
		name: "Midnight Madness",
		startDate: new Date(2023, 3, 2, 3, 0),
		price: 13,
		banner: new URL(
			"https://static01.nyt.com/images/2023/02/13/multimedia/08BEFORE-MIDNIGHT-fzql/08BEFORE-MIDNIGHT-fzql-videoSixteenByNine3000.jpg"
		),
		id: 0,
	},
	{
		name: "Neon Nightclub",
		startDate: new Date(2023, 6, 1, 22, 0),
		price: 15,
		banner: new URL(
			"https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cGFydHl8ZW58MHx8MHx8&w=1000&q=80"
		),
		id: 1,
	},
	{
		name: "Tropical Luau",
		startDate: new Date(2023, 6, 12, 18, 0),
		price: 25,
		banner: new URL(
			"https://nationaleventpros.com/wp-content/uploads/2018/08/Depositphotos_18288305_l-2015-1-1600x1066.jpg"
		),
		id: 2,
	},
	{
		name: "Bollywood Extravaganza",
		startDate: new Date(2023, 6, 17, 20, 0),
		price: 50,
		banner: new URL(
			"https://upload.wikimedia.org/wikipedia/commons/6/67/People_approving_for_change_at_Parivartan_Yatra%2C_Beohari_in_April_2013.jpg"
		),
		id: 3,
	},
	{
		name: "80s Retro Party",
		startDate: new Date(2023, 6, 22, 19, 0),
		price: 20,
		banner: new URL(getRandomBannerUrl()),
		id: 4,
	},
	{
		name: "Disco Inferno",
		startDate: new Date(2023, 6, 28, 21, 0),
		price: 30,
		banner: new URL(
			"https://res-5.cloudinary.com/gll/image/upload/c_fit,f_auto,h_684,w_684/v1635344681/production/0073/8/96/birthday_party_disco.jpg"
		),
		id: 5,
	},
	{
		name: "Enchanted Forest",
		startDate: new Date(2023, 7, 3, 17, 0),
		price: 40,
		banner: new URL(getRandomBannerUrl()),
		id: 6,
	},
	{
		name: "Cosmic Carnival",
		startDate: new Date(2023, 7, 7, 20, 0),
		price: 35,
		banner: new URL(getRandomBannerUrl()),
		id: 7,
	},
	{
		name: "Salsa Fiesta",
		startDate: new Date(2023, 7, 12, 19, 0),
		price: 20,
		banner: new URL(getRandomBannerUrl()),
		id: 8,
	},
	{
		name: "Wild West Hoedown",
		startDate: new Date(2023, 7, 18, 18, 0),
		price: 30,
		banner: new URL(getRandomBannerUrl()),
		id: 9,
	},
	{
		name: "Carnival of Colors",
		startDate: new Date(2023, 7, 24, 22, 0),
		price: 25,
		banner: new URL(getRandomBannerUrl()),
		id: 10,
	},
];

const partyDatabase = new Map<number, Party>();
partyList.forEach((party) => {
	partyDatabase.set(party.id, party);
});

function App() {
	const { register, handleSubmit, watch } = useForm<SearchData>();
	const onSubmit = (data: any) => console.log(data);

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
				setParties(partyList);
			}
		});
		return () => subscription.unsubscribe();
	}, [watch, miniSearch.current]);

	function addParty() {
		console.log("adding party");
		let newParty = generateRandomParty(partyDatabase.size);

		// partyList.push(newParty);
		partyDatabase.set(newParty.id, newParty);

		let newParties = [...parties, newParty];

		miniSearch.current.add(newParty);

		setParties(newParties);
	}

	const particlesInit = useCallback(async (engine: Engine) => {
		console.log(engine);
		await loadFull(engine);
	}, []);

	return (
		<div className={styles.page}>
			<div className="particlesContainer">
				<Particles
					id="tsparticles"
					{...backgroundParticleConfig}
					init={particlesInit}
				/>
			</div>

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
