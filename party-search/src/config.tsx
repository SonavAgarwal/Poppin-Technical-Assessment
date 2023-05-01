import { IParticlesProps } from "react-particles";
import { getRandomBannerUrl } from "./utils";

export const partyList: Party[] = [
	{
		name: "Midnight Slay",
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

export const champagneConfig: IParticlesProps = {
	options: {
		particles: {
			number: {
				value: 30,
			},
			color: {
				value: "#ffe89c",
			},
			shape: {
				type: "circle",
			},
			opacity: {
				value: 0.5,
				random: true,
			},
			size: {
				value: 5,
				random: true,
			},
			move: {
				enable: true,
				speed: 7,
				direction: "top",
				random: true,
				straight: false,
				out_mode: "out",
			},
		},
	},
};

export const backgroundParticleConfig: IParticlesProps = {
	options: {
		particles: {
			number: {
				value: 0, // TODO
			},
			color: {
				value: ["#C21FD6", "#8F64E9", "#52B3FB"],
			},
			shape: {
				type: "circle",
				stroke: {
					width: 0,
					color: "#000000",
				},
			},
			opacity: {
				value: 1,
				random: false,
			},
			size: {
				value: 100,
				random: false,
			},
			move: {
				enable: true,
				speed: 3,
				direction: "none",
				random: false,
				straight: false,
				out_mode: "out",
				bounce: false,
				attract: {
					enable: false,
					rotateX: 600,
					rotateY: 1200,
				},
			},
		},
	},
};
