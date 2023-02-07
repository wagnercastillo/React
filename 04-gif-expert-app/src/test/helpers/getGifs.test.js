import { getGifs } from "../../helpers/getGifs";

describe("Prueba con getGifs Fecth", () => {
	test("debe de traer first", async () => {
		const gifs = await getGifs("Dragon Ball");
		expect(gifs.length).toBe(10);
	});

	test("debe de traer la categoria", async () => {
		const gifs = await getGifs('');
        expect(gifs.length).toBe(0);
	});
});
