import { getHeroeByIdAsync } from "../../Base/09-promesas";
import heroes from "../../data/heroes";

describe("Pruebas con promesas", () => {
	test("getHeroresByIdAsync debe de retornar un Héroe async", (done) => {
		const id = 1;

		getHeroeByIdAsync(id).then((heroe) => {
			expect(heroe).toBe(heroes[0]);
			done();
		});
	});

	test("Debe de obtener un error si el héroe por id no existe", (done) => {
		
        const id = 10;

		getHeroeByIdAsync(id)
            .catch((error) => {
			    expect(error).toBe("No se pudo encontrar el héroe");
			    done();
		});
	});
});
