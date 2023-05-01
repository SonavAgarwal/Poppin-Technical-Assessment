export const randomBanners = [
	"https://images.pexels.com/photos/3171837/pexels-photo-3171837.jpeg?cs=srgb&dl=pexels-cottonbro-studio-3171837.jpg&fm=jpg",
	"https://t3.ftcdn.net/jpg/02/87/35/70/360_F_287357045_Ib0oYOxhotdjOEHi0vkggpZTQCsz0r19.jpg",
	"https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cGFydHl8ZW58MHx8MHx8&w=1000&q=80",
	"https://media.npr.org/assets/img/2022/11/04/gettyimages-1183414292-1-_slide-edff8c3fe6afcab5c6457e3c7bd011f5c1745161-s1100-c50.jpg",
	"https://images.unsplash.com/photo-1530103862676-de8c9debad1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGFydHl8ZW58MHx8MHx8&w=1000&q=80",
	"https://thumbs.dreamstime.com/b/young-party-cheerful-people-showered-confetti-club-31137048.jpg",
	"https://t4.ftcdn.net/jpg/01/20/28/25/360_F_120282530_gMCruc8XX2mwf5YtODLV2O1TGHzu4CAb.jpg",
	"https://st2.depositphotos.com/1594308/5547/i/950/depositphotos_55474203-stock-photo-friends-dancing-at-party.jpg",
	"https://cdn.wallpapersafari.com/31/87/1MTHAb.jpg",
	"https://media.istockphoto.com/id/1279483477/photo/we-are-going-to-party-as-if-theres-no-tomorrow.jpg?s=612x612&w=0&k=20&c=wPmd1hxQEDxhG2P-OwDW3EJ0WoyuW-lEBsPa8O09bwU=",
	"https://upload.wikimedia.org/wikipedia/commons/6/67/People_approving_for_change_at_Parivartan_Yatra%2C_Beohari_in_April_2013.jpg",
	"https://static.independent.co.uk/s3fs-public/thumbnails/image/2019/08/14/16/istock-945885714.jpg",
	"https://www.theknot.com/tk-media/images/51d3a361-1529-4ec4-8f76-1beba2ab2058",
	"https://hips.hearstapps.com/hmg-prod/images/cake-candy-and-gifts-at-birthday-party-royalty-free-image-1627469570.jpg?resize=1200:*",
	"https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cGFydHl8ZW58MHx8MHx8&w=1000&q=80",
	"https://media.timeout.com/images/105883947/image.jpg",
	"https://res-5.cloudinary.com/gll/image/upload/c_fit,f_auto,h_684,w_684/v1635344681/production/0073/8/96/birthday_party_disco.jpg",
	"https://www.brides.com/thmb/hx3-eVeo4xTqjHqwZowL8xf4SRY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__brides__public__brides-services__production__2017__08__08__5989f8818718823b6b247037_JaneandMoo20170804_07-c3acd479deb04295bb9186767d4ae9b6.jpg",
	"https://marioparty.nintendo.com/assets/images/logo.png",
];

export function getRandomBannerUrl() {
	return randomBanners[Math.floor(Math.random() * randomBanners.length)];
}

export function generatePartyName() {
	const firstWords = [
		"Happy",
		"Wild",
		"Epic",
		"Funky",
		"Fiesta",
		"Jolly",
		"Vibrant",
		"Crazy",
		"Colorful",
		"Glamorous",
		"Sparkling",
		"Dazzling",
		"Radiant",
		"Fantastic",
		"Fabulous",
		"Joyful",
		"Merry",
		"Sizzling",
		"Sassy",
		"Saucy",
	];
	const secondWords = [
		"Celebration",
		"Bash",
		"Gala",
		"Fest",
		"Fete",
		"Soiree",
		"Party",
		"Jamboree",
		"Hootenanny",
		"Shindig",
		"Hoedown",
		"Rave",
		"Mixer",
		"Reception",
		"Get-Together",
		"Blowout",
		"Happening",
		"Gathering",
		"Social",
	];

	const randomFirstWord =
		firstWords[Math.floor(Math.random() * firstWords.length)];
	const randomSecondWord =
		secondWords[Math.floor(Math.random() * secondWords.length)];

	const partyName = randomFirstWord + " " + randomSecondWord;

	return partyName;
}

function generateRandomDate() {
	const start = new Date("2022-01-01").getTime();
	const end = new Date("2025-12-31").getTime();
	const randomDate = new Date(Math.random() * (end - start) + start);
	return randomDate;
}

export function generateRandomParty(id: number) {
	const newParty: Party = {
		name: generatePartyName(),
		banner: new URL(getRandomBannerUrl()),
		price: Math.floor(Math.random() * 100),
		startDate: generateRandomDate(),
		id: id,
	};
	return newParty;
}

export function formatDate(date: Date) {
	const daysOfWeek = [
		"Sunday",
		"Monday",
		"Tuesday",
		"Wednesday",
		"Thursday",
		"Friday",
		"Saturday",
	];
	const monthsOfYear = [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December",
	];

	const dayOfWeek = daysOfWeek[date.getDay()];
	const month = monthsOfYear[date.getMonth()];
	const dayOfMonth = date.getDate();

	return `${dayOfWeek}, ${month} ${dayOfMonth}`;
}
