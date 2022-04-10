import { heroes } from "../data/heroes";

export const getHeroesByName = (name = " ") => {
	if (name === "") {
		return [];
	}
	const heroesByName = heroes.filter((hero) => {
		return hero.superhero
			.toLowerCase()
			.trim()
			.includes(name.toLowerCase().trim());
	});
	return heroesByName;
};
