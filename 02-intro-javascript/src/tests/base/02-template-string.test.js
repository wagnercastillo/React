import '@testing-library/jest-dom'

import { getSaludo } from "../../Base/02-template-string";


describe("Pruebas en 02-template-string.test.js", () => {
	test("getSaludo debe de retornar hola wagner", () => {
		const nombre = "Wagner";

        const saludo = getSaludo(nombre);

        expect(saludo).toBe(`Hola ${nombre}`);
	});



    // getSaludo debe de retornar hola cristhoper si no hay argumento en el nombre

});
