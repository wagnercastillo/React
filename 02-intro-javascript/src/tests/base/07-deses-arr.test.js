import '@testing-library/jest-dom'
import { retornaArreglo } from "../../base/07-deses-arr";

describe("Pruebas en desestructuración", () => {
	test("Debe de retornar un string y un número ", () => {
		const [letras, numeros] = retornaArreglo();

		// expect(arr).toEqual(['Kevin',24]);
		expect(letras).toBe("ABC");
	});
});
